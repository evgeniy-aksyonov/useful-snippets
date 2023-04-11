// Lazy load images using IntersectionObserver API
import React, { useState, useRef, useEffect } from 'react';

const LazyImageGallery = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState([]);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const imgSrc = img.getAttribute('data-src');
            img.setAttribute('src', imgSrc);
            setLoadedImages((loadedImages) => [...loadedImages, imgSrc]);
            observer.unobserve(img);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const imagesToObserve = galleryRef.current.querySelectorAll('img[data-src]');
    imagesToObserve.forEach((img) => observer.observe(img));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="image-gallery" ref={galleryRef}>
      {images.map((image, index) => (
        <img
          key={index}
          data-src={image}
          className={`gallery-image${loadedImages.includes(image) ? ' loaded' : ''}`}
          width="200"
          height="200"
          alt=""
        />
      ))}
    </div>
  );
};

export default LazyImageGallery;
