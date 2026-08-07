import React, { useState, useRef, useEffect } from 'react';

// Reuses the carousel styles already defined in Home.css (.carousel-container
// and friends) — this component only exists so the carousel's index/scroll
// state can be instantiated independently, twice, side by side.
const HelpCarousel = ({ list }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeItem = container.children[activeIndex];

      if (activeItem) {
        const itemCenter = activeItem.offsetLeft + (activeItem.offsetWidth / 2);
        const containerCenter = container.clientWidth / 2;
        const targetScroll = itemCenter - containerCenter;

        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const scrollLeft = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : list.length - 1));
  };

  const scrollRight = () => {
    setActiveIndex(prev => (prev < list.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="carousel-container">
      {/* Main Featured Card */}
      <div className="featured-display">
        <div className="featured-content">
          <span className="carousel-counter">{activeIndex + 1}/{list.length}</span>
          <h3>{list[activeIndex]}</h3>
        </div>
      </div>

      {/* Navigation Area (Arrows + Strip) */}
      <div className="carousel-navigation-area">
        <button
          className="nav-btn prev-btn desktop-only"
          onClick={scrollLeft}
          aria-label="Previous Item"
        >
          <strong>&#10094;</strong>
        </button>

        <div className="carousel-strip-wrapper">
          <div className="strip-fade-left"></div>
          <div className="strip-fade-right"></div>

          <div className="carousel-strip" ref={scrollContainerRef}>
            {list.map((item, index) => (
              <div
                key={index}
                className={`strip-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="mini-card">
                  <span className="mini-text">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="nav-btn next-btn desktop-only"
          onClick={scrollRight}
          aria-label="Next Item"
        >
          <strong>&#10095;</strong>
        </button>
      </div>

      <p className="carousel-hint"><em>Swipe to explore</em></p>
    </div>
  );
};

export default HelpCarousel;
