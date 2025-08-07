import React from "react";
import "./CountryInfo.css";

function CountryInfo({ data }) {
    return (
        <div className="country-container">
            {data.map((country, index) => (
                <div key={index} className="country-card">
                    <h2 className="country-name">{country.name}</h2>
                    {country.cities.map((city, idx) => (
                        <div key={idx} className="city-card">
                            <img src={city.coatOfArms} alt={`Герб ${city.name}`} className="city-emblem" />
                            <div className="city-details">
                                <h3>{city.name}</h3>
                                <p>{city.description}</p>
                                <p><strong>Населення:</strong> {city.population.toLocaleString()} осіб</p>
                                <p><strong>Площа:</strong> {city.area} км²</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default CountryInfo;
