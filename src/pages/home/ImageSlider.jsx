import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './css/slide.css'

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(changeImage, 1000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className='ImageSlider'>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}        
      />
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;
