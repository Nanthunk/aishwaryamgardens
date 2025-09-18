// import React from "react";
// import "./Home.css";
// import img from "./assets/aishwarya.png";
// import ContactForm from "./ContactForm";
// import CarouselSection from "./CarouselSection";
// import Amenities from "./Amenities";
// import blueprint from "./assets/blueprint.jpg";
// import DirectionCircle from "./Direction";
// import FloatingBar from "./FloatingButton";
// import Footer from "./Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

// import carousel1 from "./assets/carousel1.jpg";
// import carousel2 from "./assets/carousel2.jpg";
// import carousel3 from "./assets/carousel3.jpg";
// import carousel4 from "./assets/carousel4.jpg";
// import carousel5 from "./assets/carousel5.jpg";
// import carousel6 from "./assets/carousel6.jpg";
// import carousel7 from "./assets/carousel7.jpg";


// function Home() {
//   return (
//     <div className="home">
//       <img src={img} alt="Sample" className="home-image" />

//       <ContactForm />

//        {/* Form Section with Background */}
//       {/* <div className="form-section">
//        <form
//   action="https://formspree.io/f/xblawjga"
//   method="POST"
//   className="user-form"
//   >
//   <h2>Contact Us</h2>
//   <input type="text" name="name" placeholder="Enter your name" required />
//   <input type="tel" name="phone" placeholder="Enter your phone number" required />
//   <input type="email" name="email" placeholder="Enter your email" required />
//   <button type="submit">Submit</button>
// </form>

//       </div> */}

//        <div className="overview">
//         <center>
//         <h1>AISHWARYA GARDEN-ன் மேலோட்டம்</h1>
//         <p>2014-ஆம் ஆண்டு அறிமுகமான AISHWARYA GARDENS, ஏலகிரி மலைக் காட்சியுடன் இயற்கை அழகை தாங்கிய ஒரு PREMIUM GATED COMMUNITY திட்டமாகும். இரண்டு கட்டங்களாக (Phase 1 – 202 பிளாட்கள், Phase 2 – 48 பிளாட்கள்) உருவாக்கப்பட்டுள்ள. இந்த திட்டம், 24x7 CCTV பாதுகாப்பு, தனித்த நீர்வழங்கும் வசதி போன்ற உயர் தரமான அம்சங்களை வழங்குகிறது. ஜோலார்பேட்டை ரயில் நிலையம் மற்றும் திருப்பத்தூர் பேருந்து நிலையம் அருகே அமைந்துள்ளதால் எளிய அணுகல் வசதி உண்டு. குடும்ப வாழ்வுக்கும், முதலீட்டுக்கும் சிறந்த இடமாக விளங்கும் AISHWARYA GARDENS, இயற்கையோடும், நகர வாழ்க்கை வசதிகளோடும் சமநிலை கொண்ட ஒரு கனவு இல்ல அனுபவத்தை வழங்குகிறது.</p>
//         </center>

//        </div>

//        <div className="highlights">
//         <h3>எங்களின் செழிப்பான நிலத்தில் உங்கள் கனவு இல்லத்தை உருவாக்குங்கள்...!</h3>
//         <h1><span>20+</span> சிறப்பம்சங்கள்</h1>
//         <h1><span>200+</span> ஆடம்பர நிலப்பகுதிகள்</h1>
//         <h1><span>15+</span> ஏக்கர் நிலங்கள்</h1>
//        </div>

//        function BootstrapCarousel() {
//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-4">Gallery</h1>

//       <div id="aishwaryaCarousel" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={carousel1} className="d-block w-100" alt="Slide 1" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel2} className="d-block w-100" alt="Slide 2" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel3} className="d-block w-100" alt="Slide 3" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel4} className="d-block w-100" alt="Slide 4" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel5} className="d-block w-100" alt="Slide 5" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel6} className="d-block w-100" alt="Slide 6" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel7} className="d-block w-100" alt="Slide 7" />
//           </div>
//         </div>

//         {/* Controls */}
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#aishwaryaCarousel"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         </button>

//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#aishwaryaCarousel"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         </button>

//         {/* Indicators */}
//         <div className="carousel-indicators">
//           <button type="button" data-bs-target="#aishwaryaCarousel" data-bs-slide-to="0" className="active"></button>
//           <button type="button" data-bs-target="#aishwaryaCarousel" data-bs-slide-to="1"></button>
//           <button type="button" data-bs-target="#aishwaryaCarousel" data-bs-slide-to="2"></button>
//           <button type="button" data-bs-target="#aishwaryaCarousel" data-bs-slide-to="3"></button>
//           <button type="button" data-bs-target="#aishwaryaCarousel" data-bs-slide-to="4"></button>
//           <button type="button" data-bs-target="#aishwaryaCarousel" data-bs-slide-to="5"></button>
//           <button type="button" data-bs-target="#aishwaryaCarousel" data-bs-slide-to="6"></button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BootstrapCarousel;

//          <Amenities />

//          <div className="lifestyle">
//           <center>
//             <h1>அசாதாரண வாழ்க்கை முறை</h1>
//             <p>AISHWARYA GARDENS உங்கள் வாழ்க்கைமுறையை மேம்படுத்த Pollution-Free, அமைதியான மற்றும் சாந்தமான சூழலை வழங்குகிறது, மேலும் அதிக மறுவிற்பனை மதிப்புள்ள பிளாட்டுகள் இங்கு உள்ளன.</p>
//             <p>வசதி மற்றும் இயற்கை இரண்டையும் இணைக்கும் சிறந்த வாழ்க்கை சூழலை நீங்கள் இங்கு அனுபவிக்க முடியும்.</p>
//           </center>
//          </div>

//          <div className="blueprint">
//           <center>
//           <h1>Perspective Planning</h1>
//           <img src={blueprint} alt="blueprint" />
//           </center>
//          </div>

//         <div className="location-section">
//   <h2 className="location-title">LOCATION</h2>
//   <h1 className="ideal-location">IDEAL LOCATION</h1>

//   <div className="location-content">
    
//     <div className="map-container">
//   <iframe
//     title="Google Map with Pin"
//     src="https://www.google.com/maps?q=12.527735,78.578094&hl=en&z=17&output=embed"
//     width="100%"
//     height="350"
//     style={{ border: "0" }}
//     allowFullScreen=""
//     loading="lazy"
//   ></iframe>
// </div>


//     {/* Right Side Details */}
//     <div className="transport-details">
//       <h3>KEY TRANSPORT</h3>
//       <ul>
//         <li>🏧 ATM: <span>2 mins</span></li>
//         <li>🚌 Bus Station: <span>5 mins</span></li>
//         <li>🚉 Railway Station: <span>10 mins</span></li>
//         <li>🏥 Hospitals: <span>5 mins</span></li>
//         <li>🏫 Schools: <span>15 mins</span></li>
//         <li>🎓 University: <span>20 mins</span></li>
//         <li>📽 Theatres: <span>15 mins</span></li>
//         <li>🛒 Super Market: <span>3 mins</span></li>
//         <li>🛒 Fuel Station: <span>3 mins</span></li>

//       </ul>
//     </div>
//   </div>
//   <a
//     href="https://www.google.com/maps?q=12.527735,78.578094"
    
//     rel="noopener noreferrer"
//     style={{ display: "block", marginTop: "20px", color: "white", textDecoration: "underline" }}
//   >
//     📍 Click here for Directions of Our Location
//   </a>
// </div>
   
//     <div className="direction-section">
//        <center>
//        <h1>Directions</h1>

//        <p>Click the Circle for Explore Around Us</p>
//        </center>

//        <DirectionCircle />
//        <FloatingBar />
//         <Footer />
//     </div>
         

//     </div>  

//   );
// }

// export default Home;


import React from "react";
import "./Home.css";
import img from "./assets/aishwarya.png";
import ContactForm from "./ContactForm";
import Amenities from "./Amenities";
import lifestylepic from "./assets/lifestylepic.jpg";
// import blueprint from "./assets/blueprint.jpg";
import DirectionCircle from "./Direction";
import FloatingBar from "./FloatingButton";
import Footer from "./Footer";
import BootstrapCarousel from "./BootstrapCarousel";

//  Home Component
function Home() {
  return (
    <div className="home">
      
      <img src={img} alt="Sample" className="home-image" />

      <ContactForm />

      <div className="overview">
        <center>
          <b>
          <h1>AISHWARYA GARDEN-ன் மேலோட்டம்</h1>
          <p> 
            2014-ஆம் ஆண்டு அறிமுகமான AISHWARYA GARDENS, ஏலகிரி மலைக் காட்சியுடன் இயற்கை
            அழகை தாங்கிய ஒரு PREMIUM GATED COMMUNITY திட்டமாகும். இரண்டு கட்டங்களாக
            (Phase 1 – 202 பிளாட்கள், Phase 2 – 48 பிளாட்கள்) உருவாக்கப்பட்டுள்ள. இந்த
            திட்டம், 24x7 CCTV பாதுகாப்பு, தனித்த நீர்வழங்கும் வசதி போன்ற உயர் தரமான
            அம்சங்களை வழங்குகிறது. ஜோலார்பேட்டை ரயில் நிலையம் மற்றும் திருப்பத்தூர்
            பேருந்து நிலையம் அருகே அமைந்துள்ளதால் எளிய அணுகல் வசதி உண்டு. குடும்ப
            வாழ்வுக்கும், முதலீட்டுக்கும் சிறந்த இடமாக விளங்கும் AISHWARYA GARDENS,
            இயற்கையோடும், நகர வாழ்க்கை வசதிகளோடும் சமநிலை கொண்ட ஒரு கனவு இல்ல அனுபவத்தை
            வழங்குகிறது.
            
          </p></b>
        </center>
      </div>

      <div className="highlights">
        
        <h3><b>எங்களின் செழிப்பான நிலத்தில் உங்கள் கனவு இல்லத்தை உருவாக்குங்கள்...!</b></h3>
        <h1><b><span>20+</span> சிறப்பம்சங்கள்</b></h1>
        <h1><b><span>200+</span> ஆடம்பர நிலப்பகுதிகள்</b></h1>
        <h1><b><span>15+</span> ஏக்கர் நிலங்கள்</b></h1>
        
      </div>

      {/* ✅ Use Carousel Here */}
      <BootstrapCarousel />

      <Amenities />

      <div className="lifestyle">

        <img src={lifestylepic} alt="Sample" className="lifestyle-image" />
        {/* <center>
          
          <h1><b>அழகான வாழ்க்கை முறை</b></h1>
          <b>
          <p>
            AISHWARYA GARDENS உங்கள் வாழ்க்கைமுறையை மேம்படுத்த Pollution-Free, அமைதியான மற்றும்
            சாந்தமான சூழலை வழங்குகிறது, மேலும் அதிக மறுவிற்பனை மதிப்புள்ள பிளாட்டுகள் இங்கு உள்ளன.
          </p>
          <p>
            வசதி மற்றும் இயற்கை இரண்டையும் இணைக்கும் சிறந்த வாழ்க்கை சூழலை நீங்கள் இங்கு அனுபவிக்க
            முடியும்.
          </p>
          </b>
        </center> */}
      </div>

      {/* <div className="blueprint">
        <center>
          
          <h1><b>திட்ட வரைபடம்</b></h1>
          
          <img src={blueprint} alt="blueprint" />
        </center>
      </div> */}

      {/* location + directions remain same */}
      <div className="location-section">
      
   <h1 className="location-title"> <b> SITE LOCATION</b></h1>
   {/* <h1 className="ideal-location">வழிகாட்டி</h1> */}
  

   <div className="location-content">
    
     <div className="map-container">
   <iframe
    title="Google Map with Pin"
    src="https://www.google.com/maps?q=12.527735,78.578094&hl=en&z=17&output=embed"
    width="100%"
    height="350"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>


    {/* Right Side Details */}
    <div className="transport-details">
      
      <h3><b>அடிப்படை தேவைகள் </b></h3>
      <b>
      <ul>
        <li>🏧 ATM: <span>2 mins</span></li>
        <li>🚌 Bus Station: <span>5 mins</span></li>
        <li>🚉 Railway Station: <span>10 mins</span></li>
        <li>🏥 Hospitals: <span>5 mins</span></li>
        <li>🏫 Schools: <span>15 mins</span></li>
        <li>🎓 University: <span>20 mins</span></li>
        <li>📽 Theatres: <span>15 mins</span></li>
        <li>🛒 Super Market: <span>3 mins</span></li>
        <li>⛽ Fuel Station: <span>3 mins</span></li>

      </ul>
      </b>
    </div>
  </div>
  <a
    href="https://www.google.com/maps?q=12.527735,78.578094"
    rel="noopener noreferrer"
    style={{ display: "block", marginTop: "20px", color: "white", textDecoration: "underline" }}
  >
   <b> 📍எங்கள் இடம் செல்லும் வழியை அறிய இங்கே தொடவும்</b>
  </a>
</div>

      <div className="direction-section">
        <center>
          
          <h1><b>Directions</b></h1>
          <p><b>எங்களைச் சுற்றி உள்ள இடங்களை கண்டறிய வட்டத்தில் உள்ள <b>"N , E , S , W"</b> ஆகிய திசைகளின் எழுத்தை தொடவும்</b></p>
          
        </center>

        <DirectionCircle />
        <FloatingBar />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
