import React from "react";
import "./Browse.css"
import Cards from "../components/Cards/Cards";

const Browse = () => {
    return (
        <div className="browse">
        <h1>Browse</h1>
        <div className="browse-cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </div>
        </div>
        )
    }

export default Browse;