'use strict';

import React from "react";

const CarCard = ({ image, name, description }) => {
    return (
        <div className="car-card">
            <img src={image} alt={name} className="car-image" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default CarCard;
