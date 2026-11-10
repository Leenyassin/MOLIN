import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { DestinationContext } from "../context/DestinationContext";
import { FavoritesContext } from "../context/FavoritesContext";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PlaceIcon from "@mui/icons-material/Place";

import "../styles/profile.css";

function Profile() {

    const { currentUser } = useContext(AuthContext);

    const {
        selectedDestinations,
        unselectDestination
    } = useContext(DestinationContext);

    const { favorites } = useContext(FavoritesContext);

    return (
        <div className="profile-page">

            {currentUser ? (
                <>

                    {/* Welcome Section */}
                    <div className="profile-welcome">

                        <div className="welcome-icon">
                            <FlightTakeoffIcon />
                        </div>

                        <div className="welcome-text">
                            <h1>Hello, {currentUser.name}! ♡</h1>

                            <p>
                                Welcome back to MOLIN.
                                Your next adventure starts here.
                            </p>
                        </div>

                    </div>

                    {/* My Destinations */}
                    <div className="travel-collection">

                        <div className="collection-heading">
                            <h2>My Destinations</h2>

                            <p>
                                All your selected destinations and saved places in one place.
                            </p>
                        </div>

                        {selectedDestinations.length > 0 ? (

                            selectedDestinations.map(function(destination) {

                                const hotelCount = favorites.filter(function(item) {
                                    return (
                                        item.category === "hotels" &&
                                        (
                                            item.destinationId === destination.id ||
                                            (!item.destinationId && item.country === destination.name)
                                        )
                                    );
                                }).length;

                                const restaurantCount = favorites.filter(function(item) {
                                    return (
                                        item.category === "restaurants" &&
                                        (
                                            item.destinationId === destination.id ||
                                            (!item.destinationId && item.country === destination.name)
                                        )
                                    );
                                }).length;

                                const attractionCount = favorites.filter(function(item) {
                                    return (
                                        item.category === "attractions" &&
                                        (
                                            item.destinationId === destination.id ||
                                            (!item.destinationId && item.country === destination.name)
                                        )
                                    );
                                }).length;

                                return (

                                    <div
                                        className="profile-destination-section"
                                        key={destination.id}
                                    >

                                        {/* Destination Card */}
                                        <div
                                            className="profile-destination-card"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(to right, rgba(25, 39, 29, 0.75), rgba(25, 39, 29, 0.15)), url(" +
                                                    destination.image + ")",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center"
                                            }}
                                        >

                                            <div className="profile-destination-content">

                                                <span className="profile-destination-label">
                                                    <span>📍</span>
                                                    Your Destination
                                                </span>

                                                <h2>{destination.name}</h2>

                                                <p>
                                                    Your selected destination is ready!
                                                    Get ready for your next adventure.
                                                </p>

                                                <button
                                                    className="profile-select-link"
                                                    onClick={function() {
                                                        unselectDestination(destination.id);
                                                    }}
                                                >
                                                    Remove Destination
                                                </button>

                                            </div>

                                            <div className="profile-destination-decoration">
                                                <FlightTakeoffIcon />
                                            </div>

                                        </div>

                                        {/* Destination Collection */}
                                        <div className="travel-collection">

                                            <div className="collection-heading">
                                                <h2>{destination.name} Collection</h2>

                                                <p>
                                                    Your saved places in {destination.name}.
                                                </p>
                                            </div>

                                            <div className="collection-cards">

                                                {/* Hotels */}
                                                <Link
                                                    to={"/favorites/hotels/" + destination.id}
                                                    className="collection-card"
                                                >
                                                    <div className="collection-icon">
                                                        <HotelIcon />
                                                    </div>

                                                    <h3>My Hotels</h3>

                                                    <p>{hotelCount} saved hotels</p>
                                                </Link>

                                                {/* Restaurants */}
                                                <Link
                                                    to={"/favorites/restaurants/" + destination.id}
                                                    className="collection-card"
                                                >
                                                    <div className="collection-icon">
                                                        <RestaurantIcon />
                                                    </div>

                                                    <h3>My Restaurants</h3>

                                                    <p>{restaurantCount} saved restaurants</p>
                                                </Link>

                                                {/* Tourist Attractions */}
                                                <Link
                                                    to={"/favorites/attractions/" + destination.id}
                                                    className="collection-card"
                                                >
                                                    <div className="collection-icon">
                                                        <PlaceIcon />
                                                    </div>

                                                    <h3>Tourist Attractions</h3>

                                                    <p>{attractionCount} saved places</p>
                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                );

                            })

                        ) : (

                            <div className="profile-destination-card">

                                <div className="profile-destination-content">

                                    <h2>Your next adventure</h2>

                                    <p>
                                        You haven't selected any destinations yet.
                                        Start exploring and choose your favorite places!
                                    </p>

                                    <Link
                                        to="/destinations"
                                        className="profile-select-link"
                                    >
                                        Explore Destinations
                                    </Link>

                                </div>

                            </div>

                        )}

                        {/* Add Another Destination */}
                        <div className="collection-heading">
                            <Link
                                to="/destinations"
                                className="profile-select-link"
                            >
                                + Add Another Destination
                            </Link>
                        </div>

                    </div>

                </>
            ) : (

                <div className="profile-card">
                    <h1>Please Login First</h1>

                    <p>
                        You need an account to view your profile.
                    </p>
                </div>

            )}

        </div>
    );
}

export default Profile;
