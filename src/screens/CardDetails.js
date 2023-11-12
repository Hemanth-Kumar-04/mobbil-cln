import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-slick'; // Assuming you're using a carousel library like react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardDetails.css'; // Add your own styling if needed
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
              <motion.h1 className="title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                Title
              </motion.h1>        
              <motion.div className="logo" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                <img src="https://i.pinimg.com/564x/ee/db/e8/eedbe8cb6e2b61293456b67f6b3d9d3e.jpg" alt="Logo" />
              </motion.div>
        
              <Carousel {...carouselSettings} className="carousel">
                <motion.div className="carousel-item" key={1}>
                  <img src="https://w7.pngwing.com/pngs/166/320/png-transparent-rectangle-shape-rectangle-purple-blue-angle.png" alt="Image 1" />
                </motion.div>
                <motion.div className="carousel-item" key={2}>
                  <img src="https://w7.pngwing.com/pngs/166/320/png-transparent-rectangle-shape-rectangle-purple-blue-angle.png" alt="Image 2" />
                </motion.div>
                <motion.div className="carousel-item" key={3}>
                  <img src="https://w7.pngwing.com/pngs/166/320/png-transparent-rectangle-shape-rectangle-purple-blue-angle.png" alt="Image 3" />
                </motion.div>
              </Carousel>
            </div>
     
        );
}

export default CardDetails;