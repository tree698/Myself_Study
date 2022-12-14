import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [X, setX] = useState();
  const [Y, setY] = useState();

  document.addEventListener('mousemove', (event) => {
    setX(event.clientX);
    setY(event.clientY);
  });

  return (
    <div className="container">
      <div
        className="pointer"
        style={{ transform: `translate(${X}px, ${Y}px)` }}
      />
    </div>
  );
}
