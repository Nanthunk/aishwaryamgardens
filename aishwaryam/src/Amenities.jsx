// import React, { useState } from "react";
// import "./Amenities.css";
// import ame1 from "./assets/ame1.jpg";
// import ame2 from "./assets/ame2.jpeg";
// import ame3 from "./assets/ame3.jpg";
// import ame4 from "./assets/ame4.jpg";
// import ame5 from "./assets/ame5.jpeg";
// import ame6 from "./assets/ame6.jpeg";


// function Amenities() {
//   const [showAll, setShowAll] = useState(false);

//   const images = [ame1, ame2, ame3, ame4, ame5, ame6];

//   return (
//     <div className="amenities">
//       <h1>Amenities</h1>

//       <div className="amenities-grid">
//         {(showAll ? images : images.slice(0, 3)).map((img, index) => (
//           <img key={index} src={img} alt={`amenity-${index}`} />

//         ))}
//       </div>

//       {!showAll && (
//         <button className="load-btn" onClick={() => setShowAll(true)}>
//           Load More
//         </button>
//       )}
//     </div>
//   );
// }

// export default Amenities;

import React from "react";
import "./Amenities.css";
import ame1 from "./assets/ame1.jpg";
import ame2 from "./assets/ame2.jpeg";
import ame3 from "./assets/ame3.jpg";
import ame4 from "./assets/ame4.jpg";
import ame5 from "./assets/ame5.jpeg";
import ame6 from "./assets/ame6.jpeg";

function Amenities() {
  const amenities = [
    { img: ame1, name: "24/7 தண்ணீர் வசதி" },
    { img: ame3, name: "பாதுகாப்பு வசதி (CCTV & Gated Entry)" },
    { img: ame2, name: "பேருந்து வசதி" },
    { img: ame6, name: "இரயில் நிலையம் வசதி" },
    { img: ame4, name: "தெரு விளக்கு வசதி" },
    { img: ame5, name: "தார் ரோடு வசதி" },
    
  ];

  return (
    <div className="amenities">
      <h1>சிறப்பு அம்சங்கள்</h1>

      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div key={index} className="amenity-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;
