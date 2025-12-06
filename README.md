# Healing On Tap Website

A beautiful, spiritual healing and coaching website built with React.js. This website showcases healing, coaching, and spirituality offerings with a clean, modern design that conveys spirituality and healing without being overly new-age or cheesy.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, spiritual aesthetic with beautiful gradients and typography
- **Interactive Elements**: Circle of offerings on homepage, dropdown navigation
- **Complete Pages**: Home, About, Offerings, Rates, and Contact pages
- **Secure Forms**: Contact form with validation and security best practices
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Pages

### Home Page
- Hero section with call-to-action
- Interactive circle of offerings
- Client reviews section
- About preview
- Call-to-action section

### About Page
- Personal journey and philosophy
- Detailed sections for each offering (with anchor links)
- Dropdown navigation from header
- Call-to-action section

### Offerings Page
- Detailed service descriptions
- What's included and benefits for each service
- Process explanation
- Call-to-action section

### Rates Page
- Package pricing tiers
- Individual service rates
- Payment and policy information
- Call-to-action section

### Contact Page
- Contact form with validation
- Contact information
- Booking process explanation
- Emergency resources

## Technology Stack

- **React.js 18**: Modern React with hooks
- **React Router**: Client-side routing
- **CSS3**: Custom styling with gradients and animations
- **Google Fonts**: Inter and Playfair Display fonts
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Healing On Tap-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Header.css
│   ├── Footer.js
│   └── Footer.css
├── pages/
│   ├── Home.js
│   ├── Home.css
│   ├── About.js
│   ├── About.css
│   ├── Offerings.js
│   ├── Offerings.css
│   ├── Rates.js
│   ├── Rates.css
│   ├── Contact.js
│   └── Contact.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Customization

### Content Updates
- Update text content in the respective page components
- Replace placeholder images with actual photos
- Modify service offerings in the data arrays
- Update contact information and pricing

### Styling
- Colors and gradients can be modified in the CSS files
- Font families are defined in the HTML head and CSS
- Responsive breakpoints can be adjusted in media queries

### Security Features
- Form validation on the contact page
- Secure form handling
- XSS protection through React's built-in sanitization
- HTTPS ready for production deployment

## Deployment

The website is ready for deployment to any static hosting service:

- **Netlify**: Connect your repository and deploy automatically
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use the build folder contents
- **AWS S3**: Upload the build folder to an S3 bucket

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is private and proprietary. All rights reserved.

## Support

For questions or support regarding this website, please contact the development team.
# kalyanamitta-website
