import React, { useState, useEffect } from 'react';

const FallingStarsComponent = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Create initial stars
    const initialStars = Array.from({ length: 50 }, () => createStar());
    setStars(initialStars);

    // Animation loop
    const animationInterval = setInterval(() => {
      setStars(prevStars => {
        // Move existing stars down and create new ones to replace those that fell off
        return prevStars.map(star => {
          // Update position
          const newY = star.y + star.speed;
          
          // If star has fallen off screen, create a new one at the top
          if (newY > 100) {
            return createStar();
          }
          
          // Otherwise move it down
          return { ...star, y: newY };
        });
      });
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  // Function to create a new star with random properties
  const createStar = () => {
    return {
      id: Math.random().toString(36).substring(2, 9),
      x: Math.random() * 100, // Random x position (0-100%)
      y: -5 - Math.random() * 10, // Start slightly above the viewport
      size: 0.5 + Math.random() * 2, // Random size between 0.5-2.5
      opacity: 0.1 + Math.random() * 0.9, // Random opacity between 0.1-1
      speed: 0.1 + Math.random() * 0.4, // Random fall speed
    };
  };

  return (
    <div className="fixed inset-0 bg-gray-900 overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, ${star.opacity})`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingStarsComponent;