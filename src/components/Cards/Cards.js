import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="card">
      <div className="img-in">
      <img
        src="https://w7.pngwing.com/pngs/166/320/png-transparent-rectangle-shape-rectangle-purple-blue-angle.png" // Replace with your image URL
        alt="Card Image"
        className="card-img"
      />
      </div>
      <div className="card-content">
        < div className="header">
          <img src="https://w7.pngwing.com/pngs/166/320/png-transparent-rectangle-shape-rectangle-purple-blue-angle.png" className="rounded-logo" />
          
          <h2 className="card-title">Card Title</h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
