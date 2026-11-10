import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "../styles/destinations.css";

// Hero Image
const heroImage = "/images/destinations-hero.png";

function Destinations() {

    const [search, setSearch] = useState("");

    const destinations = [
        {
            id: "italy",
            name: "Italy",
            image: "/images/italy.jpg"
        },
        {
            id: "switzerland",
            name: "Switzerland",
            image: "/images/switzerland.jpg"
        },
        {
            id: "france",
            name: "France",
            image: "/images/france.jpg"
        },
        {
            id: "greece",
            name: "Greece",
            image: "/images/greece.jpg"
        },
        {
            id: "japan",
            name: "Japan",
            image: "/images/japan.jpg"
        },
        {
            id: "lebanon",
            name: "Lebanon",
            image: "/images/lebanon.jpg"
        }
    ];

    const filteredDestinations = destinations.filter(function(place) {
        return place.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="destinations-page">

            {/* Hero Section */}
            <div
                className="destinations-hero"
                style={{
                    backgroundImage: "linear-gradient(rgba(30, 48, 36, 0.20), rgba(30, 48, 36, 0.30)), url(" + heroImage + ")"
                }}
            >

                <div className="destinations-hero-content">

                    <h1>Explore Destinations</h1>

                    <p>
                        Discover beautiful places and find your next adventure.
                    </p>

                    <div className="destinations-search">

                        <SearchIcon />

                        <input
                            type="text"
                            placeholder="Search for a country..."
                            value={search}
                            onChange={function(event) {
                                setSearch(event.target.value);
                            }}
                        />

                    </div>

                </div>

            </div>

            {/* Countries Section */}
            <div className="destinations-container">

                <div className="destinations-heading">

                    <h2>Discover the World</h2>

                    <p>
                        Choose your next destination and start exploring.
                    </p>

                </div>

                <div className="destinations-list">

                    {filteredDestinations.length > 0 ? (

                        filteredDestinations.map(function(place) {

                            return (

                                <div
                                    className="destination-country-card"
                                    key={place.id}
                                >

                                    <div className="destination-country-image">

                                        <img
                                            src={place.image}
                                            alt={place.name}
                                        />

                                    </div>

                                    <div className="destination-country-info">

                                        <h3>{place.name}</h3>

                                        <p>
                                            Discover the beauty of {place.name}.
                                        </p>

                                        <Link
                                            to={"/destination/" + place.id}
                                            className="destination-view-button"
                                        >
                                            View Destination
                                            <ArrowForwardIcon />
                                        </Link>

                                    </div>

                                </div>

                            );

                        })

                    ) : (

                        <div className="no-destinations">

                            <h3>No destinations found</h3>

                            <p>
                                Try searching for another country.
                            </p>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default Destinations;


