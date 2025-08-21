import { carouselImages } from '../data/carousel-images.js';

export default function ImageCarousel({ className="h-96" }) {
  // daisy ui image carousel – dynamic
  return (
    <div className="carousel carousel-end rounded-box">
      {carouselImages.map((image) => (
        <div key={image.id} className="carousel-item">
          <img 
            src={image.src} 
            alt={image.alt} 
            className={className}
          />
        </div>
      ))}
    </div>
  );
}