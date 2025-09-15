import React, { useState } from "react";
import "./Direction.css";

import northImg from "./assets/north.jpeg";
import eastImg from "./assets/east.jpg";
import southImg from "./assets/south.jpeg";
import westImg from "./assets/west.jpeg";

const DirectionCircle = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = {
    N: northImg,
    E: eastImg,
    S: southImg,
    W: westImg,
  };

  return (
    <div className="direction-wrapper">
      {/* Circle with directions */}
      <div className="direction-circle">
        <button className="dir-btn north" onClick={() => setSelectedImage(images.N)}>N</button>
        <button className="dir-btn east" onClick={() => setSelectedImage(images.E)}>E</button>
        <button className="dir-btn south" onClick={() => setSelectedImage(images.S)}>S</button>
        <button className="dir-btn west" onClick={() => setSelectedImage(images.W)}>W</button>
      </div>

      {/* Show selected image */}
      {selectedImage && (
        <div className="image-container">
          <img src={selectedImage} alt="Selected Direction" />
        </div>
      )}
    </div>
  );
};

export default DirectionCircle;