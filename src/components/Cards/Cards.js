import React from "react";
import "./Cards.css"

const Cards = () => {
    return(
        <div className="card">
        <img
          src="https://w7.pngwing.com/pngs/166/320/png-transparent-rectangle-shape-rectangle-purple-blue-angle.png" // Replace with your image URL
          alt="Card Image"
          className="card-img"
        />
        <div className="card-content">
          <h2 className="card-title">Card Title</h2>
          {/* Add your rounded logo or icon here */}
          <div className="rounded-logo"></div>
        </div>
      </div>
  
    )
}

export default Cards;
