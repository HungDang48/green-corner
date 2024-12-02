import React, { useState, useEffect } from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

interface BannerProps {
  images?: string[]; // Array of image paths
  interval?: number; // Optional interval in milliseconds
}

const Banner: React.FC<BannerProps> = ({ images = [img1, img2, img3], interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  if (images.length === 0) {
    return <div>No image</div>;
  }

  return (
    <div style={{ width: '100%', height: '900px', overflow: 'hidden' }}> 
      {/* Container with fixed height */}
      <img
        src={images[currentImageIndex]}
        alt="banner"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', // Ensures images are properly stretched and cropped to fit
        }}
      />
    </div>
  );
};

export default Banner;
