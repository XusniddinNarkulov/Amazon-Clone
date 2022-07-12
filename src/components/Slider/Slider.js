import React, { useEffect, useState } from "react";
import "./Slider.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Slider = (props) => {
   const [index, setIndex] = useState(0);

   const { images } = props;

   useEffect(() => {
      const lastIndex = images.length - 1;
      if (index < 0) {
         setIndex(lastIndex);
      }
      if (index > lastIndex) {
         setIndex(0);
      }
   }, [index, images]);

   useEffect(() => {
      const sliderInterval = setInterval(() => {
         setIndex((prev) => prev + 1);
      }, 4000);
      return () => clearInterval(sliderInterval);
   });

   return (
      <div className="section">
         <div className="section-center">
            {images.map((image, key) => {
               let position = "nextSlide";
               if (key === index) {
                  position = "activeSlide";
               }
               if (
                  key === index - 1 ||
                  (index === 0 && key === images.length - 1)
               ) {
                  position = "lastSlide";
               }
               return (
                  <article className={position} key={key}>
                     <img src={image} alt="banner img" className="banner-img" />
                  </article>
               );
            })}
            <p className="prev" onClick={() => setIndex((prev) => prev - 1)}>
               <ArrowBackIosIcon />
            </p>
            <p className="next" onClick={() => setIndex((prev) => prev + 1)}>
               <ArrowForwardIosIcon />
            </p>
         </div>
      </div>
   );
};

export default Slider;
