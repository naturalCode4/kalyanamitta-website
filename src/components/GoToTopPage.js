// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const GoToTopPage = () => {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     // If there is no hash (anchor link), jump to top instantly. If there IS a hash, the page-specific logic will handle it
//     if (!hash) {
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'instant'
//       });
//     }
//   }, [pathname, hash]);

//   return null;
// };

// export default GoToTopPage;

// import { useLayoutEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const GoToTopPage = () => {
//   const { pathname, hash } = useLocation();

//   useLayoutEffect(() => {
//     // 1. Disable browser's default scroll restoration
//     if ('scrollRestoration' in window.history) {
//       window.history.scrollRestoration = 'manual';
//     }

//     // 2. Determine where to scroll
//     let targetTop = 0;

//     if (hash) {
//       const id = hash.replace('#', '');
//       const element = document.getElementById(id);
//       if (element) {
//         const headerOffset = 100;
//         const elementPosition = element.getBoundingClientRect().top;
//         // Calculate absolute position relative to document
//         targetTop = elementPosition + window.pageYOffset - headerOffset;
//       }
//     }

//     // 3. Perform the scroll instantly
//     window.scrollTo({
//       top: targetTop,
//       left: 0,
//       behavior: 'instant' // Force instant jump
//     });

//   }, [pathname, hash]); // Re-run whenever path or hash changes

//   return null;
// };

// export default GoToTopPage;

import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const GoToTopPage = () => {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(pathname);

  useLayoutEffect(() => {
    // 1. Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const isSamePage = prevPathRef.current === pathname;
    prevPathRef.current = pathname;

    // SCENARIO 1: Same Page Navigation (Smooth Scroll)
    // We want to scroll from CURRENT position to target
    if (isSamePage) {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // No hash (e.g. clicking "About" while on "About#section") -> Scroll to top smoothly
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      return; 
    }

    // SCENARIO 2: Different Page Navigation (Instant Jump)
    // We want to start fresh at the target location
    let targetTop = 0;
    
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        targetTop = elementPosition + window.pageYOffset - headerOffset;
      }
    }

    // Force instant jump for new pages
    window.scrollTo({
      top: targetTop,
      left: 0,
      behavior: 'instant'
    });

  }, [pathname, hash]);

  return null;
};

export default GoToTopPage;