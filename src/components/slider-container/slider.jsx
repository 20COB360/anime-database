import React, { useEffect, useState } from 'react';
import './slider.scss';

export default function Slider({ numImages = 12 }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % numImages);
        setIsAnimating(false);
      }, 2000); // Adjust the delay based on your animation duration
    }, 5000);

    return () => clearInterval(intervalId);
  }, [numImages]);

  return (
    <div className="slider">
      <div className="slide">
        <div className="content ">
          <img
            className={`first-image ${isAnimating ? 'leave' : ''}`}
            src={require(`../../data/slider-images/slide-image-${currentImage}.jpg`)}
            alt="Unable to Load"
          /></div>
        <div className="content ">
          <img
            className={`next-image ${isAnimating ? 'shift' : ''}`}
            src={require(`../../data/slider-images/slide-image-${(currentImage + 1) % numImages}.jpg`)}
            alt="Unable to Load"
          />
        </div>
        <div className="content ">
          <img
            className={`next-image ${isAnimating ? 'shift' : ''}`}
            src={require(`../../data/slider-images/slide-image-${(currentImage + 2) % numImages}.jpg`)}
            alt="Unable to Load"
          />
        </div>
        <div className="content ">
          <img
            className={`next-image ${isAnimating ? 'enter' : ''}`}
            src={require(`../../data/slider-images/slide-image-${(currentImage + 3) % numImages}.jpg`)}
            alt="Unable to Load"
          />
        </div>
        <div className="content ">
          <img
            className={`last-image ${isAnimating ? 'enter' : ''}`}
            src={require(`../../data/slider-images/slide-image-${(currentImage + 4) % numImages}.jpg`)}
            alt="Unable to Load"
          />
        </div>
      </div>
    </div>
  );
}
