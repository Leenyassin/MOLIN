import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlaceIcon from "@mui/icons-material/Place";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapIcon from "@mui/icons-material/Map";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link, useNavigate } from "react-router-dom";

import "../styles/home.css";

const destinations = [
    {
        id: "italy",
        name: "Italy",
        arabicName: "إيطاليا",
        image: "/images/italy.jpg"
    },
    {
        id: "switzerland",
        name: "Switzerland",
        arabicName: "سويسرا",
        image: "/images/switzerland.jpg"
    },
    {
        id: "france",
        name: "France",
        arabicName: "فرنسا",
        image: "/images/france.jpg"
    },
    {
        id: "greece",
        name: "Greece",
        arabicName: "اليونان",
        image: "/images/greece.jpg"
    },
    {
        id: "japan",
        name: "Japan",
        arabicName: "اليابان",
        image: "/images/japan.jpg"
    },
    {
        id: "lebanon",
        name: "Lebanon",
        arabicName: "لبنان",
        image: "/images/lebanon.jpg"
    }
];

function Home() {

    const [destination, setDestination] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();

        const searchValue = destination.trim().toLowerCase();

        if (searchValue === "") {
            setError("");
            return;
        }

        const selectedPlace = destinations.find(function(place) {
            return (
                place.name.toLowerCase() === searchValue ||
                place.arabicName === destination.trim()
            );
        });

        if (selectedPlace) {
            setError("");
            navigate("/destination/" + selectedPlace.id);
        } else {
            setError("Destination Not Found");
        }
    }

    function handleDestinationClick(id) {
        navigate("/destination/" + id);
    }

    return (
        <div className="home">

            {/* Hero Section */}
            <section
                className="hero"
                style={{
                    backgroundImage: "url('/images/hero-background.jpeg')"
                }}
            >
                <div className="hero-content">

                    <h1 className="hero-logo">MOLIN</h1>

                    <h2 className="hero-subtitle">
                        Memories Of Life In Nature
                    </h2>

                    <p className="hero-slogan">
                        Plan <span>•</span> Explore <span>•</span> Experience
                    </p>

                    <form className="hero-search" onSubmit={handleSearch}>

                        <SearchIcon className="search-icon" />

                        <input
                            type="text"
                            placeholder="Search for a destination..."
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                                setError("");
                            }}
                        />

                        <button type="submit">
                            Explore Destinations
                            <ArrowForwardIcon />
                        </button>

                    </form>

                    {error && (
                        <p
                            style={{
                                color: "#a83232",
                                backgroundColor: "#fffaf2",
                                padding: "8px 18px",
                                borderRadius: "20px",
                                marginTop: "12px",
                                fontSize: "14px",
                                fontWeight: "bold"
                            }}
                        >
                            {error}
                        </p>
                    )}

                </div>
            </section>

            {/* Popular Destinations Section */}
            <section className="popular-destinations">

                <div className="section-heading">
                    <span></span>
                    <h2>Popular Destinations</h2>
                    <span></span>
                </div>

                <div className="destinations-grid">

                    {destinations.map((place) => (
                        <div className="destination-card" key={place.id}>

                            <img
                                src={place.image}
                                alt={place.name}
                                className="destination-image"
                            />

                            <div className="destination-info">

                                <h3>
                                    <PlaceIcon />
                                    {place.name}
                                </h3>

                                <button
                                    onClick={() =>
                                        handleDestinationClick(place.id)
                                    }
                                >
                                    View Destination
                                    <ArrowForwardIcon />
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </section>

            {/* Explore by Experience Section */}
            <section className="explore-experience">

                <div className="section-heading">
                    <span></span>
                    <h2>Explore by Experience</h2>
                    <span></span>
                </div>

                <p className="experience-subtitle">
                    Every journey has its own story. Find the experience that inspires you.
                </p>

                <div className="experience-container">

                    {/* Honeymoon */}
                    <div className="experience-card">
                        <img
                            src="/images/honeymoon.jpg"
                            alt="Honeymoon"
                        />

                        <div className="experience-info">
                            <h3>Honeymoon</h3>
                            <p>Romantic moments and unforgettable escapes.</p>
                        </div>
                    </div>

                    {/* Friends Trip */}
                    <div className="experience-card">
                        <img
                            src="/images/friends-trip.jpg"
                            alt="Friends Trip"
                        />

                        <div className="experience-info">
                            <h3>Friends Trip</h3>
                            <p>Discover new places and make memories together.</p>
                        </div>
                    </div>

                    {/* Family Vacation */}
                    <div className="experience-card">
                        <img
                            src="/images/family-trip.jpg"
                            alt="Family Vacation"
                        />

                        <div className="experience-info">
                            <h3>Family Vacation</h3>
                            <p>Beautiful destinations for the whole family.</p>
                        </div>
                    </div>

                    {/* Adventure Trip */}
                    <div className="experience-card">
                        <img
                            src="/images/adventure.jpg"
                            alt="Adventure Trip"
                        />

                        <div className="experience-info">
                            <h3>Adventure Trip</h3>
                            <p>Explore nature and discover something new.</p>
                        </div>
                    </div>

                </div>

            </section>

            {/* Why Choose MOLIN Section */}
            <section className="why-molin">

                <div className="section-heading">
                    <span></span>
                    <h2>Why Choose MOLIN?</h2>
                    <span></span>
                </div>

                <p className="why-subtitle">
                    Everything you need to create unforgettable travel memories.
                </p>

                <div className="why-container">

                    <div className="why-card">
                        <div className="why-icon">
                            <MapIcon />
                        </div>
                        <h3>Discover Destinations</h3>
                        <p>
                            Find beautiful places and explore amazing destinations around the world.
                        </p>
                    </div>

                    <div className="why-card">
                        <div className="why-icon">
                            <EventAvailableIcon />
                        </div>
                        <h3>Easy Trip Planning</h3>
                        <p>
                            Plan your entire journey and organize your trip in one place.
                        </p>
                    </div>

                    <div className="why-card">
                        <div className="why-icon">
                            <AccountBalanceWalletIcon />
                        </div>
                        <h3>Budget Friendly</h3>
                        <p>
                            Discover trips and experiences that match your budget.
                        </p>
                    </div>

                    <div className="why-card">
                        <div className="why-icon">
                            <FavoriteIcon />
                        </div>
                        <h3>Personalized Experiences</h3>
                        <p>
                            Find the perfect travel experience based on your interests.
                        </p>
                    </div>

                </div>

                <div className="about-button-container">
                    <Link to="/about" className="about-us-button">
                        About Us
                        <span>→</span>
                    </Link>
                </div>

            </section>

        </div>
    );
}

export default Home;
