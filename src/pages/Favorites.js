import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { FavoritesContext } from "../context/FavoritesContext";
import { DestinationContext } from "../context/DestinationContext";

import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../styles/favorites.css";

function Favorites() {

    const { category, destinationId } = useParams();

    const { favorites, removeFavorite } = useContext(FavoritesContext);
    const { selectedDestinations } = useContext(DestinationContext);

    const categoryNames = {
        hotels: "My Hotels",
        restaurants: "My Restaurants",
        attractions: "Tourist Attractions"
    };

    // Correct image paths from DestinationDetails.js
    const placeImages = {

        "italy-hotel-1": "/images/places/italy-hotel-1.jpeg",
        "italy-hotel-2": "/images/places/italy-hotel-2.jpeg",
        "italy-hotel-3": "/images/places/italy-hotel-3.jpeg",

        "italy-restaurant-1": "/images/places/italy-restaurant-1.jpeg",
        "italy-restaurant-2": "/images/places/italy-restaurant-2.jpeg",
        "italy-restaurant-3": "/images/places/italy-restaurant-3.jpeg",

        "italy-attraction-1": "/images/places/italy-attraction-1.jpeg",
        "italy-attraction-2": "/images/places/italy-attraction-2.jpeg",
        "italy-attraction-3": "/images/places/italy-attraction-3.jpeg",


        "switzerland-hotel-1": "/images/places/switzerland-hotel-1.jpeg",
        "switzerland-hotel-2": "/images/places/switzerland-hotel-2.webp",
        "switzerland-hotel-3": "/images/places/switzerland-hotel-3.jpeg",

        "switzerland-restaurant-1": "/images/places/switzerland-restaurant-1.jpeg",
        "switzerland-restaurant-2": "/images/places/switzerland-restaurant-2.jpeg",
        "switzerland-restaurant-3": "/images/places/switzerland-restaurant-3.jpeg",

        "switzerland-attraction-1": "/images/places/switzerland-attraction-1.jpeg",
        "switzerland-attraction-2": "/images/places/switzerland-attraction-2.jpeg",
        "switzerland-attraction-3": "/images/places/switzerland-attraction-3.jpeg",


        "france-hotel-1": "/images/places/france-hotel-1.webp",
        "france-hotel-2": "/images/places/france-hotel-2.jpeg",
        "france-hotel-3": "/images/places/france-hotel-3.webp",

        "france-restaurant-1": "/images/places/france-restaurant-1.jpeg",
        "france-restaurant-2": "/images/places/france-restaurant-2.jpeg",
        "france-restaurant-3": "/images/places/france-restaurant-3.jpeg",

        "france-attraction-1": "/images/places/france-attraction-1.webp",
        "france-attraction-2": "/images/places/france-attraction-2.jpeg",
        "france-attraction-3": "/images/places/france-attraction-3.jpeg",


        "greece-hotel-1": "/images/places/greece-hotel-1.jpeg",
        "greece-hotel-2": "/images/places/greece-hotel-2.jpeg",
        "greece-hotel-3": "/images/places/greece-hotel-3.jpeg",

        "greece-restaurant-1": "/images/places/greece-restaurant-1.jpeg",
        "greece-restaurant-2": "/images/places/greece-restaurant-2.jpeg",
        "greece-restaurant-3": "/images/places/greece-restaurant-3.jpeg",

        "greece-attraction-1": "/images/places/greece-attraction-1.jpeg",
        "greece-attraction-2": "/images/places/greece-attraction-2.webp",
        "greece-attraction-3": "/images/places/greece-attraction-3.jpeg",


        "japan-hotel-1": "/images/places/japan-hotel-1.jpeg",
        "japan-hotel-2": "/images/places/japan-hotel-2.jpeg",
        "japan-hotel-3": "/images/places/japan-hotel-3.jpeg",

        "japan-restaurant-1": "/images/places/japan-restaurant-1.jpeg",
        "japan-restaurant-2": "/images/places/japan-restaurant-2.jpeg",
        "japan-restaurant-3": "/images/places/japan-restaurant-3.jpeg",

        "japan-attraction-1": "/images/places/japan-attraction-1.jpeg",
        "japan-attraction-2": "/images/places/japan-attraction-2.jpeg",
        "japan-attraction-3": "/images/places/japan-attraction-3.webp",


        "lebanon-hotel-1": "/images/places/lebanon-hotel-1.jpeg",
        "lebanon-hotel-2": "/images/places/lebanon-hotel-2.jpeg",
        "lebanon-hotel-3": "/images/places/lebanon-hotel-3.jpeg",

        "lebanon-restaurant-1": "/images/places/lebanon-restaurant-1.jpeg",
        "lebanon-restaurant-2": "/images/places/lebanon-restaurant-2.jpeg",
        "lebanon-restaurant-3": "/images/places/lebanon-restaurant-3.jpeg",

        "lebanon-attraction-1": "/images/places/lebanon-attraction-1.jpeg",
        "lebanon-attraction-2": "/images/places/lebanon-attraction-2.webp",
        "lebanon-attraction-3": "/images/places/lebanon-attraction-3.jpeg"

    };

    // Convert country names to destination IDs
    const countryIds = {
        Italy: "italy",
        Switzerland: "switzerland",
        France: "france",
        Greece: "greece",
        Japan: "japan",
        Lebanon: "lebanon"
    };

    // Get the correct image for each favorite
    function getFavoriteImage(item) {

        const countryId =
            item.destinationId || countryIds[item.country];

        if (countryId && placeImages[item.id]) {
            return placeImages[item.id];
        }

        return item.image;
    }

    const currentDestination = selectedDestinations.find(function(item) {
        return item.id === destinationId;
    });

    const selectedFavorites = favorites.filter(function(item) {

        const matchesCategory = item.category === category;

        const matchesDestination = destinationId
            ? (
                item.destinationId === destinationId ||
                (!item.destinationId && currentDestination &&
                    item.country === currentDestination.name)
            )
            : selectedDestinations.some(function(destination) {
                return (
                    item.destinationId === destination.id ||
                    (!item.destinationId && item.country === destination.name)
                );
            });

        return matchesCategory && matchesDestination;

    });

    return (
        <div className="favorites-page">

            <Link to="/profile" className="favorites-back">
                <ArrowBackIcon />
                Back to Profile
            </Link>

            <div className="favorites-page-heading">

                <h1>{categoryNames[category] || "My Favorites"}</h1>

                <p>
                    {currentDestination
                        ? "Your saved places in " + currentDestination.name + "."
                        : "Your saved places across your selected destinations."
                    }
                </p>

            </div>

            {selectedFavorites.length > 0 ? (

                <div className="favorites-list">

                    {selectedFavorites.map(function(item) {

                        const favoriteImage = getFavoriteImage(item);

                        return (

                            <div
                                className="favorite-item"
                                key={(item.destinationId || item.country) + "-" + item.id}
                            >

                                {favoriteImage && (
                                    <img
                                        src={favoriteImage}
                                        alt={item.name}
                                        onError={function(event) {
                                            event.target.style.display = "none";
                                        }}
                                    />
                                )}

                                <div className="favorite-item-info">

                                    <h3>{item.name}</h3>

                                    <p>{item.country}</p>

                                    <p>{item.description}</p>

                                </div>

                                <button
                                    className="remove-favorite"
                                    onClick={function() {
                                        removeFavorite(
                                            item.id,
                                            item.destinationId,
                                            item.country
                                        );
                                    }}
                                >
                                    <DeleteIcon />
                                </button>

                            </div>

                        );

                    })}

                </div>

            ) : (

                <div className="favorites-page-empty">

                    <h2>No saved places yet ♡</h2>

                    <p>
                        {currentDestination
                            ? "Start exploring and add your favorite places in " +
                              currentDestination.name + " to see them here."
                            : "Select a destination and add your favorite places to see them here."
                        }
                    </p>

                    <Link to="/destinations">
                        Explore Destinations
                    </Link>

                </div>

            )}

        </div>
    );
}

export default Favorites;
