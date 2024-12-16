'use strict';

import React from "react";
import CarCard from "./CarCard.jsx";
import car1 from "../assets/images/car1.svg";
import car2 from "../assets/images/car2.svg";
import car3 from "../assets/images/car3.svg";

const CarList = () => {
    const cars = [
        {
            image: car1,
            name: "Tesla Model S",
            description: "Электрический автомобиль с высокой производительностью и дальностью хода.",
        },
        {
            image: car2,
            name: "BMW X5",
            description: "Легковой внедорожник с отличными ходовыми качествами и комфортным салоном.",
        },
        {
            image: car3,
            name: "Audi A4",
            description: "Элегантный седан с передовыми технологиями и динамичной ездой.",
        },
    ];

    return (
        <div className="car-list">
            {cars.map((car, index) => (
                <CarCard key={index} image={car.image} name={car.name} description={car.description} />
            ))}
        </div>
    );
};

export default CarList;
