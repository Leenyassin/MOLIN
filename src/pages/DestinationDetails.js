import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { DestinationContext } from "../context/DestinationContext";
import { FavoritesContext } from "../context/FavoritesContext";

import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PlaceIcon from "@mui/icons-material/Place";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "../styles/destinationDetails.css";

function DestinationDetails() {

    const { id } = useParams();

    const {
        selectedDestinations,
        selectDestination,
        unselectDestination
    } = useContext(DestinationContext);

    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    const [activeCategory, setActiveCategory] = useState("hotels");

    const destinations = [
        {
            id: "italy",
            name: "Italy",
            image: "/images/italy.jpg",
            aboutImage: "/images/italy-about.jpg",
            description: "Experience the timeless beauty of Italy, from historic cities to breathtaking coastlines.",
            about: "Italy is a country full of history, art, and culture. From the romantic streets of Rome to the stunning coastline of Amalfi, Italy offers an unforgettable travel experience.",

            hotels: [
                { id: "italy-hotel-1", name: "Hotel Bellevue", image: "/images/places/italy-hotel-1.jpeg" },
                { id: "italy-hotel-2", name: "Hotel Vatican View", image: "/images/places/italy-hotel-2.jpeg" },
                { id: "italy-hotel-3", name: "Grand Hotel Tremezzo", image: "/images/places/italy-hotel-3.jpeg" }
            ],

            restaurants: [
                { id: "italy-restaurant-1", name: "La Pergola", image: "/images/places/italy-restaurant-1.jpeg" },
                { id: "italy-restaurant-2", name: "Ristorante Aroma", image: "/images/places/italy-restaurant-2.jpeg" },
                { id: "italy-restaurant-3", name: "Trattoria Da Enzo", image: "/images/places/italy-restaurant-3.jpeg" }
            ],

            attractions: [
                { id: "italy-attraction-1", name: "Colosseum", image: "/images/places/italy-attraction-1.jpeg" },
                { id: "italy-attraction-2", name: "Trevi Fountain", image: "/images/places/italy-attraction-2.jpeg" },
                { id: "italy-attraction-3", name: "Amalfi Coast", image: "/images/places/italy-attraction-3.jpeg" }
            ]
        },

        {
            id: "switzerland",
            name: "Switzerland",
            image: "/images/switzerland.jpg",
            aboutImage: "/images/switzerland-about.jpg",
            description: "Discover beautiful mountains, peaceful lakes and unforgettable views.",
            about: "Switzerland is famous for its beautiful Alps, charming villages, clear lakes and breathtaking natural landscapes.",

            hotels: [
                { id: "switzerland-hotel-1", name: "Hotel Schweizerhof", image: "/images/places/switzerland-hotel-1.jpeg" },
                { id: "switzerland-hotel-2", name: "The Chedi Andermatt", image: "/images/places/switzerland-hotel-2.webp" },
                { id: "switzerland-hotel-3", name: "Badrutt's Palace Hotel", image: "/images/places/switzerland-hotel-3.jpeg" }
            ],

            restaurants: [
                { id: "switzerland-restaurant-1", name: "Restaurant de l'Hôtel de Ville", image: "/images/places/switzerland-restaurant-1.jpeg" },
                { id: "switzerland-restaurant-2", name: "Le Chat-Botté", image: "/images/places/switzerland-restaurant-2.jpeg" },
                { id: "switzerland-restaurant-3", name: "Restaurant Kronenhalle", image: "/images/places/switzerland-restaurant-3.jpeg" }
            ],

            attractions: [
                { id: "switzerland-attraction-1", name: "Lake Geneva", image: "/images/places/switzerland-attraction-1.jpeg" },
                { id: "switzerland-attraction-2", name: "Jungfraujoch", image: "/images/places/switzerland-attraction-2.jpeg" },
                { id: "switzerland-attraction-3", name: "Chapel Bridge", image: "/images/places/switzerland-attraction-3.jpeg" }
            ]
        },

        {
            id: "france",
            name: "France",
            image: "/images/france.jpg",
            aboutImage: "/images/france-about.jpg",
            description: "Explore romantic cities, beautiful streets and amazing landmarks.",
            about: "France is known for its art, culture, fashion and beautiful destinations, from the streets of Paris to the French Riviera.",

            hotels: [
                { id: "france-hotel-1", name: "Hotel Plaza Athénée", image: "/images/places/france-hotel-1.webp" },
                { id: "france-hotel-2", name: "Le Bristol Paris", image: "/images/places/france-hotel-2.jpeg" },
                { id: "france-hotel-3", name: "Hotel de Crillon", image: "/images/places/france-hotel-3.webp" }
            ],

            restaurants: [
                { id: "france-restaurant-1", name: "Le Jules Verne", image: "/images/places/france-restaurant-1.jpeg" },
                { id: "france-restaurant-2", name: "Septime", image: "/images/places/france-restaurant-2.jpeg" },
                { id: "france-restaurant-3", name: "Le Meurice", image: "/images/places/france-restaurant-3.jpeg" }
            ],

            attractions: [
                { id: "france-attraction-1", name: "Eiffel Tower", image: "/images/places/france-attraction-1.webp" },
                { id: "france-attraction-2", name: "Louvre Museum", image: "/images/places/france-attraction-2.jpeg" },
                { id: "france-attraction-3", name: "Palace of Versailles", image: "/images/places/france-attraction-3.jpeg" }
            ]
        },

        {
            id: "greece",
            name: "Greece",
            image: "/images/greece.jpg",
            aboutImage: "/images/greece-about.jpg",
            description: "Enjoy sunny islands, blue waters and beautiful coastal villages.",
            about: "Greece offers a wonderful mix of ancient history, beautiful islands, traditional villages and crystal-clear beaches.",

            hotels: [
                { id: "greece-hotel-1", name: "Canaves Oia Suites", image: "/images/places/greece-hotel-1.jpeg" },
                { id: "greece-hotel-2", name: "Grace Hotel Santorini", image: "/images/places/greece-hotel-2.jpeg" },
                { id: "greece-hotel-3", name: "Hotel Grande Bretagne", image: "/images/places/greece-hotel-3.jpeg" }
            ],

            restaurants: [
                { id: "greece-restaurant-1", name: "Varoulko Seaside", image: "/images/places/greece-restaurant-1.jpeg" },
                { id: "greece-restaurant-2", name: "Selene Restaurant", image: "/images/places/greece-restaurant-2.jpeg" },
                { id: "greece-restaurant-3", name: "Mani Mani", image: "/images/places/greece-restaurant-3.jpeg" }
            ],

            attractions: [
                { id: "greece-attraction-1", name: "Acropolis of Athens", image: "/images/places/greece-attraction-1.jpeg" },
                { id: "greece-attraction-2", name: "Santorini", image: "/images/places/greece-attraction-2.webp" },
                { id: "greece-attraction-3", name: "Meteora", image: "/images/places/greece-attraction-3.jpeg" }
            ]
        },

        {
            id: "japan",
            name: "Japan",
            image: "/images/japan.jpg",
            aboutImage: "/images/japan-about.jpg",
            description: "Experience a unique mix of tradition, culture and modern life.",
            about: "Japan is a fascinating destination where ancient temples, beautiful nature and modern cities come together.",

            hotels: [
                { id: "japan-hotel-1", name: "The Ritz-Carlton Kyoto", image: "/images/places/japan-hotel-1.jpeg" },
                { id: "japan-hotel-2", name: "Park Hyatt Tokyo", image: "/images/places/japan-hotel-2.jpeg" },
                { id: "japan-hotel-3", name: "Hoshinoya Tokyo", image: "/images/places/japan-hotel-3.jpeg" }
            ],

            restaurants: [
                { id: "japan-restaurant-1", name: "Sukiyabashi Jiro", image: "/images/places/japan-restaurant-1.jpeg" },
                { id: "japan-restaurant-2", name: "Den Restaurant", image: "/images/places/japan-restaurant-2.jpeg" },
                { id: "japan-restaurant-3", name: "Narisawa", image: "/images/places/japan-restaurant-3.jpeg" }
            ],

            attractions: [
                { id: "japan-attraction-1", name: "Mount Fuji", image: "/images/places/japan-attraction-1.jpeg" },
                { id: "japan-attraction-2", name: "Fushimi Inari Shrine", image: "/images/places/japan-attraction-2.jpeg" },
                { id: "japan-attraction-3", name: "Tokyo Tower", image: "/images/places/japan-attraction-3.webp" }
            ]
        },

        {
            id: "lebanon",
            name: "Lebanon",
            image: "/images/lebanon.jpg",
            aboutImage: "/images/lebanon-about.jpg",
            description: "Discover the beauty of Lebanon, from mountains to the Mediterranean coast.",
            about: "Lebanon is a country rich in history, culture and natural beauty, with mountains, beaches, historic cities and welcoming villages.",

            hotels: [
                { id: "lebanon-hotel-1", name: "Kempinski Summerland", image: "/images/places/lebanon-hotel-1.jpeg" },
                { id: "lebanon-hotel-2", name: "InterContinental Phoenicia", image: "/images/places/lebanon-hotel-2.jpeg" },
                { id: "lebanon-hotel-3", name: "Mövenpick Hotel Beirut", image: "/images/places/lebanon-hotel-3.jpeg" }
            ],

            restaurants: [
                { id: "lebanon-restaurant-1", name: "Em Sherif", image: "/images/places/lebanon-restaurant-1.jpeg" },
                { id: "lebanon-restaurant-2", name: "Mayrig", image: "/images/places/lebanon-restaurant-2.jpeg" },
                { id: "lebanon-restaurant-3", name: "Liza Beirut", image: "/images/places/lebanon-restaurant-3.jpeg" }
            ],

            attractions: [
                { id: "lebanon-attraction-1", name: "Jeita Grotto", image: "/images/places/lebanon-attraction-1.jpeg" },
                { id: "lebanon-attraction-2", name: "Baalbek Temples", image: "/images/places/lebanon-attraction-2.webp" },
                { id: "lebanon-attraction-3", name: "Byblos Old Souk", image: "/images/places/lebanon-attraction-3.jpeg" }
            ]
        }
    ];

    const destination = destinations.find(function(place) {
        return place.id === id;
    });

    if (!destination) {
        return (
            <div className="destination-not-found">
                <h2>Destination Not Found</h2>
                <Link to="/destinations">
                    Back to Destinations
                </Link>
            </div>
        );
    }

    const isSelected = selectedDestinations.some(function(item) {
        return item.id === destination.id;
    });

    function handleSelectDestination() {

        if (isSelected) {
            unselectDestination(destination.id);
        } else {
            selectDestination({
                id: destination.id,
                name: destination.name,
                image: destination.image
            });
        }

    }

    const categories = [
        {
            id: "hotels",
            name: "Hotels",
            icon: <HotelIcon />
        },
        {
            id: "restaurants",
            name: "Restaurants",
            icon: <RestaurantIcon />
        },
        {
            id: "attractions",
            name: "Tourist Attractions",
            icon: <PlaceIcon />
        }
    ];

    const selectedPlaces = destination[activeCategory];

    function handleFavorite(place) {

        const favoritePlace = {
            id: place.id,
            destinationId: destination.id,
            name: place.name,
            country: destination.name,
            image: place.image,
            countryImage: destination.image,
            category: activeCategory
        };

        toggleFavorite(favoritePlace);

    }

    function isFavorite(placeId) {

        return favorites.some(function(item) {
            return (
                item.id === placeId &&
                (
                    item.destinationId === destination.id ||
                    (!item.destinationId && item.country === destination.name)
                )
            );
        });

    }

    return (
        <div className="destination-details-page">

            {/* Destination Hero */}

            <div
                className="destination-details-hero"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(25, 39, 29, 0.65), rgba(25, 39, 29, 0.05)), url(" +
                        destination.image + ")"
                }}
            >

                <div className="destination-details-hero-content">

                    <h1>{destination.name}</h1>

                    <p>{destination.description}</p>

                    <button
                        className={
                            isSelected
                                ? "select-destination-button selected"
                                : "select-destination-button"
                        }
                        onClick={handleSelectDestination}
                    >
                        <FlightTakeoffIcon />

                        {isSelected
                            ? "Unselect Destination"
                            : "Select Destination"}
                    </button>

                </div>

            </div>

            {/* About Destination */}

            <div className="destination-about">

                <div className="destination-about-text">

                    <h2>About {destination.name}</h2>

                    <div className="about-decoration">
                        <span>♡</span>
                    </div>

                    <p>{destination.about}</p>

                </div>

                <div className="destination-about-image">

                    <img
                        src={destination.aboutImage}
                        alt={"About " + destination.name}
                    />

                </div>

            </div>

            {/* Category Options */}

            <div className="destination-explore-section">

                <div className="destination-categories">

                    {categories.map(function(category) {

                        return (
                            <button
                                key={category.id}
                                className={
                                    activeCategory === category.id
                                        ? "destination-category-card active"
                                        : "destination-category-card"
                                }
                                onClick={function() {
                                    setActiveCategory(category.id);
                                }}
                            >

                                <div className="destination-category-icon">
                                    {category.icon}
                                </div>

                                <h3>{category.name}</h3>

                            </button>
                        );

                    })}

                </div>

                {/* Selected Category Items */}

                <div className="destination-items-section">

                    <h2>
                        {activeCategory === "hotels" && "Hotels in " + destination.name}
                        {activeCategory === "restaurants" && "Restaurants in " + destination.name}
                        {activeCategory === "attractions" && "Tourist Attractions in " + destination.name}
                    </h2>

                    <p className="destination-items-description">

                        {activeCategory === "hotels" &&
                            "Find the best hotels for your stay in " + destination.name + "."}

                        {activeCategory === "restaurants" &&
                            "Discover places to enjoy delicious food in " + destination.name + "."}

                        {activeCategory === "attractions" &&
                            "Explore the most beautiful places in " + destination.name + "."}

                    </p>

                    <div className="destination-items-grid">

                        {selectedPlaces.map(function(place) {

                            return (
                                <div
                                    className="destination-item-card"
                                    key={place.id}
                                >

                                    <div className="destination-item-image">

                                        <img
                                            src={place.image}
                                            alt={place.name}
                                        />

                                        <button
                                            className="destination-heart-button"
                                            onClick={function() {
                                                handleFavorite(place);
                                            }}
                                        >
                                            {isFavorite(place.id) ? (
                                                <FavoriteIcon />
                                            ) : (
                                                <FavoriteBorderIcon />
                                            )}
                                        </button>

                                    </div>

                                    <div className="destination-item-info">

                                        <h3>{place.name}</h3>

                                        <p>
                                            <PlaceIcon />
                                            {destination.name}
                                        </p>

                                        <button
                                            className="add-favorite-button"
                                            onClick={function() {
                                                handleFavorite(place);
                                            }}
                                        >
                                            {isFavorite(place.id) ? (
                                                <>
                                                    <FavoriteIcon />
                                                    Remove from Favorites
                                                </>
                                            ) : (
                                                <>
                                                    <FavoriteBorderIcon />
                                                    Add to Favorites
                                                </>
                                            )}
                                        </button>

                                    </div>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DestinationDetails;


