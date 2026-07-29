// Local-only stand-in for `vercel dev`. The Vercel CLI needs an interactive
// `vercel login` + project link before it'll serve /api/*.js locally, which
// isn't always convenient. This runs the same handler files directly: each
// api/<name>.js is transpiled on the fly (they use ESM `import`, but this
// project's package.json has no "type": "module", so plain `require` can't
// load them) and served with a minimal req/res shim that matches what
// Vercel's runtime gives the handler (req.body pre-parsed, res.status().json()).
//
// Usage: node scripts/dev-api-server.js
// Then set package.json's "proxy" to http://localhost:3001 (or run
// `npm start` in another terminal) so the CRA dev server forwards /api/*
// requests here instead of 404ing.
require('dotenv').config();
const http = require('http');
const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');

const PORT = process.env.DEV_API_PORT || 3001;
const API_DIR = path.join(__dirname, '..', 'api');
// Must live inside the project (not os.tmpdir()) so requiring it can still
// resolve node_modules by walking up the directory tree.
const TMP_DIR = path.join(__dirname, '..', '.dev-api-tmp');
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR);

function loadHandler(name) {
  const filePath = path.join(API_DIR, `${name}.js`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { code } = esbuild.transformSync(source, { loader: 'js', format: 'cjs', target: 'node18' });

  // Write to a temp file and require it fresh each time, so editing an
  // api/*.js file and re-hitting the endpoint picks up the change without
  // restarting this server.
  const tmpPath = path.join(TMP_DIR, `${name}-${Date.now()}-${Math.random().toString(36).slice(2)}.cjs`);
  fs.writeFileSync(tmpPath, code);
  try {
    delete require.cache[require.resolve(tmpPath)];
    const mod = require(tmpPath);
    return mod.default || mod;
  } finally {
    fs.unlinkSync(tmpPath);
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const match = url.pathname.match(/^\/api\/([\w-]+)$/);

  if (!match) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const name = match[1];
  const filePath = path.join(API_DIR, `${name}.js`);
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end(`No api/${name}.js`);
    return;
  }

  let body = '';
  req.on('data', (chunk) => (body += chunk));
  req.on('end', async () => {
    try {
      req.body = body ? JSON.parse(body) : {};
    } catch (err) {
      req.body = {};
    }
    req.query = Object.fromEntries(url.searchParams);

    // Minimal Vercel-response shim — enough for res.status(x).json(y),
    // res.setHeader(...), res.end().
    res.status = (code) => {
      res.statusCode = code;
      return res;
    };
    res.json = (data) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    };

    try {
      const handler = loadHandler(name);
      await handler(req, res);
    } catch (err) {
      console.error(`Error running api/${name}.js:`, err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Internal error', message: err.message });
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`Local API dev server on http://localhost:${PORT} — mirrors api/*.js for local testing (no Vercel CLI login needed).`);
  console.log(`Point package.json's "proxy" at this URL, or fetch it directly, while running \`npm start\` separately.`);
});
