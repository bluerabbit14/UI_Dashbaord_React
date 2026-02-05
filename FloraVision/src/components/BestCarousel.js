import React, { useState } from 'react';
import './BestCarousel.css';
import arrow from '../assets/rightarrow.png';

var list = [
  {
    imageUrl: require('../assets/plant02.png'),
    imageAlt: 'O2 Plant',
    header: 'We Have Small And Best O2 Plants Collection’s',
    description1:
      'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
    description2:
      'Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene.'
  },
  {
    imageUrl: require('../assets/plant02.png'),
    imageAlt: 'O2 Plant',
    header: 'Indoor Air Purifying Plants',
    description1:
      'Indoor plants improve air quality and add beauty to your home.',
    description2:
      'They also reduce stress and increase productivity.'
  },
  {
    imageUrl: require('../assets/plant02.png'),
    imageAlt: 'O2 Plant',
    header: 'Best Plants for Bedroom',
    description1:
      'These plants release oxygen even at night.',
    description2:
      'Perfect for better sleep and fresh air.'
  },
  {
    imageUrl: require('../assets/plant02.png'),
    imageAlt: 'O2 Plant',
    header: 'Low Maintenance Green Plants',
    description1:
      'Easy to grow and care for.',
    description2:
      'Great for beginners.'
  }
];

export default function BestCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = list.length;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const currentItem = list[currentIndex];

  return (
    <div className='BestCarousel'>
      <div className="heading">
        <h2>Our Best O2</h2>
      </div>

      <div className="container">
        <div className="image">
          <img src={currentItem.imageUrl} alt={currentItem.imageAlt} />
        </div>

        <div className="container-content">
          <div className="header">
            <h2>{currentItem.header}</h2>
            <p>{currentItem.description1}</p>
            <p>{currentItem.description2}</p>
          </div>

          <div className="footer">
            <button>Explore</button>

            <div className="carouselIndicator">
              <img
                className="backarrow"
                src={arrow}
                alt="previous"
                onClick={prevSlide}
              />

              <div className="indicatorslide">
                <span className="currentSlide">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span> / </span>
                <span className="totalSlide">
                  {String(totalSlides).padStart(2, '0')}
                </span>
              </div>

              <img
                className="forwardarrow"
                src={arrow}
                alt="next"
                onClick={nextSlide}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Indicators */}
      <div className="bottom-indicator">
        {list.map((_, index) => (
          <span
            key={index}
            className={
              index === currentIndex
                ? 'indicator indicator-active'
                : 'indicator'
            }
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
