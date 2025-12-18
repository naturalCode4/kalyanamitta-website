// import React from 'react';
// import './Section.css';

// const Section = ({ 
//   children, 
//   className = '', 
//   variant = 'light', 
//   title = '', 
//   subtitle = '', 
//   container = true 
// }) => {
  
//   const sectionClass = `section section-${variant} ${className}`.trim();
  
//   return (
//     <section className={sectionClass}>
//       {container ? (
//         <div className="container">
//           {title && (
//             <h2 className={`section-title section-title-${variant === 'dark' || variant === 'rainbow' ? 'white' : 'dark'}`}>
//               {title}
//             </h2>
//           )}
//           {subtitle && (
//             <p className={"subtitle"}>
//             {/* <p className={`section-subtitle section-subtitle-${variant === 'dark' || variant === 'rainbow' ? 'white' : 'dark'}`}> */}
//               {subtitle}
//             </p>
//           )}
//           {children}
//         </div>
//       ) : children}
//     </section>
//   );
// };

// export default Section;

import React from 'react';
import './Section.css';

const Section = ({ 
  children, 
  className = '', 
  variant = 'light', 
  title = '', 
  subtitle = '', 
  container = true 
}) => {
  
  const sectionClass = `section section-${variant} ${className}`.trim();
  
  return (
    <section className={sectionClass}>
      {container ? (
        <div className="container">
          {title && (
            <h2 className={`section-title section-title-${variant === 'dark' || variant === 'rainbow' ? 'white' : 'dark'}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            // FIX: Reverted to use 'section-subtitle' so it matches your CSS selectors
            // Added 'subtitle' as well to inherit global spacing if needed
            <p className={`section-subtitle subtitle section-subtitle-${variant === 'dark' || variant === 'rainbow' ? 'white' : 'dark'}`}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      ) : children}
    </section>
  );
};

export default Section;