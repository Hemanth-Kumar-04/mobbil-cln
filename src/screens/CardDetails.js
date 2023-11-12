import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-slick"; // Assuming you're using a carousel library like react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardDetails.css"; // Add your own styling if needed
const CardDetails = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="app-container">
      <div className="title-date">
        <div className="title-container">
          <motion.div
            className="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img
              src="https://i.pinimg.com/564x/ee/db/e8/eedbe8cb6e2b61293456b67f6b3d9d3e.jpg"
              alt="Logo"
            />
          </motion.div>
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Title
          </motion.h1>
        </div>
        <div className="date">Date</div>
      </div>
      <div className="img-prev-div">
      <img className="img-preview"
                    src="https://private-user-images.githubusercontent.com/139763023/282322007-72126403-3183-4602-971f-208704a87b52.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTk4MTg2NzQsIm5iZiI6MTY5OTgxODM3NCwicGF0aCI6Ii8xMzk3NjMwMjMvMjgyMzIyMDA3LTcyMTI2NDAzLTMxODMtNDYwMi05NzFmLTIwODcwNGE4N2I1Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTExMlQxOTQ2MTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMjY1NGIyMjgyOWM1ZjVmMzU1YThmZDBjYzUzNzM3NjJmMmE3M2Q5Mzg5ZGRlZjg2MDI3YTQwZTQwMGEzZWVjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.yDT5TrecrQzELamd_hzJGK5WKFX6N2nSdn9XTO9xaVY"
                    alt="Image 2"
                  />
      </div>

      <Carousel {...carouselSettings} className="carousel">
        <motion.div className="carousel-item" key={1}>
          <img
            src="https://w7.pngwing.com/pngs/166/320/png-transparent-rectangle-shape-rectangle-purple-blue-angle.png"
            alt="Image 1"
          />
        </motion.div>
        <motion.div className="carousel-item" key={2}>
          <img
            src="https://w7.pngwing.com/pngs/166/320/png-transparent-rectangle-shape-rectangle-purple-blue-angle.png"
            alt="Image 2"
          />
        </motion.div>
        <motion.div className="carousel-item" key={3}>
          <img
            src="https://w7.pngwing.com/pngs/166/320/png-transparent-rectangle-shape-rectangle-purple-blue-angle.png"
            alt="Image 3"
          />
        </motion.div>
      </Carousel>
    </div>
  );
};

export default CardDetails;
