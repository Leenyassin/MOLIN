
import React, { useState } from "react";
import { Link } from "react-router-dom";

import GroupIcon from "@mui/icons-material/Group";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ExploreIcon from "@mui/icons-material/Explore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "../styles/tripFinder.css";

function TripFinder() {

    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({
        companion: "",
        occasion: "",
        duration: "",
        budget: "",
        experience: ""
    });

    const [showResult, setShowResult] = useState(false);

    const destinations = [
        {
            id: "italy",
            name: "Italy",
            image: "/images/italy.jpg",
            description: "Discover romantic streets, beautiful coastlines, rich history and unforgettable Italian experiences.",
            reasons: [
                "Beautiful historic cities",
                "Amazing food and culture",
                "Romantic streets and coastlines"
            ]
        },
        {
            id: "switzerland",
            name: "Switzerland",
            image: "/images/switzerland.jpg",
            description: "Enjoy peaceful mountain escapes, breathtaking landscapes and beautiful natural views.",
            reasons: [
                "Stunning mountain scenery",
                "Beautiful lakes and nature",
                "Perfect outdoor adventures"
            ]
        },
        {
            id: "france",
            name: "France",
            image: "/images/france.jpg",
            description: "Explore charming cities, romantic places, famous landmarks and unforgettable experiences.",
            reasons: [
                "Romantic city experiences",
                "Famous landmarks and museums",
                "Beautiful streets and cafés"
            ]
        },
        {
            id: "greece",
            name: "Greece",
            image: "/images/greece.jpg",
            description: "Enjoy sunny islands, blue waters, beautiful coastal villages and unforgettable sunsets.",
            reasons: [
                "Beautiful island beaches",
                "Perfect for romantic trips",
                "Amazing food and culture"
            ]
        },
        {
            id: "japan",
            name: "Japan",
            image: "/images/japan.jpg",
            description: "Experience a unique mix of traditional culture, exciting cities and beautiful nature.",
            reasons: [
                "Unique culture and traditions",
                "Exciting modern cities",
                "Beautiful temples and nature"
            ]
        },
        {
            id: "lebanon",
            name: "Lebanon",
            image: "/images/lebanon.jpg",
            description: "Discover mountains, beaches, historic places and wonderful local food experiences.",
            reasons: [
                "Beautiful mountains and beaches",
                "Delicious local food",
                "History and charming villages"
            ]
        }
    ];

    const questions = [
        {
            id: "companion",
            title: "Who are you traveling with?",
            subtitle: "Choose one option",
            icon: <GroupIcon />,
            options: [
                {
                    value: "partner",
                    label: "Partner",
                    image: "/images/trip-finder/partner.jpg"
                },
                {
                    value: "family",
                    label: "Family",
                    image: "/images/trip-finder/family.jpg"
                },
                {
                    value: "friends",
                    label: "Friends",
                    image: "/images/trip-finder/friends.jpg"
                },
                {
                    value: "alone",
                    label: "Alone",
                    image: "/images/trip-finder/alone.jpg"
                }
            ]
        },
        {
            id: "occasion",
            title: "What's the occasion?",
            subtitle: "What kind of trip are you planning?",
            icon: <FavoriteIcon />,
            options: [
                { value: "honeymoon", label: "Honeymoon", emoji: "♡" },
                { value: "adventure", label: "Adventure", emoji: "🏔️" },
                { value: "relaxation", label: "Relaxation", emoji: "🌿" },
                { value: "culture", label: "Culture & Discovery", emoji: "🏛️" }
            ]
        },
        {
            id: "duration",
            title: "How long is your trip?",
            subtitle: "Choose your travel duration",
            icon: <CalendarMonthIcon />,
            options: [
                { value: "short", label: "3–4 Days", emoji: "🧳" },
                { value: "week", label: "5–7 Days", emoji: "✈️" },
                { value: "long", label: "More than a Week", emoji: "🌍" }
            ]
        },
        {
            id: "budget",
            title: "What's your travel budget?",
            subtitle: "Choose the budget that suits you",
            icon: <AccountBalanceWalletIcon />,
            options: [
                { value: "low", label: "Budget Friendly", emoji: "💚" },
                { value: "medium", label: "Medium", emoji: "💰" },
                { value: "high", label: "Medium to High", emoji: "✨" }
            ]
        },
        {
            id: "experience",
            title: "What would you love to experience?",
            subtitle: "Choose the travel atmosphere you prefer",
            icon: <ExploreIcon />,
            options: [
                { value: "beach", label: "Beaches & Islands", emoji: "🏝️" },
                { value: "nature", label: "Nature & Mountains", emoji: "🏔️" },
                { value: "city", label: "Cities & Shopping", emoji: "🏙️" },
                { value: "history", label: "History & Culture", emoji: "🏛️" },
                { value: "food", label: "Food & Local Life", emoji: "🍽️" }
            ]
        }
    ];

    function handleAnswer(value) {

        const questionId = questions[currentStep].id;

        setAnswers({
            ...answers,
            [questionId]: value
        });

    }

    function getRecommendedDestination() {

        const scores = {
            italy: 0,
            switzerland: 0,
            france: 0,
            greece: 0,
            japan: 0,
            lebanon: 0
        };

        // Traveling with

        if (answers.companion === "partner") {
            scores.greece += 3;
            scores.france += 2;
            scores.italy += 1;
        }

        if (answers.companion === "family") {
            scores.lebanon += 3;
            scores.switzerland += 2;
            scores.italy += 1;
        }

        if (answers.companion === "friends") {
            scores.lebanon += 2;
            scores.japan += 2;
            scores.greece += 1;
            scores.italy += 1;
        }

        if (answers.companion === "alone") {
            scores.japan += 3;
            scores.france += 1;
            scores.switzerland += 1;
        }

        // Occasion

        if (answers.occasion === "honeymoon") {
            scores.greece += 4;
            scores.france += 2;
            scores.italy += 1;
        }

        if (answers.occasion === "adventure") {
            scores.switzerland += 3;
            scores.japan += 2;
            scores.lebanon += 1;
        }

        if (answers.occasion === "relaxation") {
            scores.greece += 2;
            scores.switzerland += 2;
            scores.lebanon += 1;
        }

        if (answers.occasion === "culture") {
            scores.japan += 3;
            scores.italy += 2;
            scores.france += 2;
            scores.lebanon += 1;
        }

        // Duration

        if (answers.duration === "short") {
            scores.france += 2;
            scores.lebanon += 2;
            scores.italy += 1;
        }

        if (answers.duration === "week") {
            scores.greece += 2;
            scores.italy += 2;
            scores.france += 1;
        }

        if (answers.duration === "long") {
            scores.japan += 2;
            scores.switzerland += 2;
        }

        // Budget

        if (answers.budget === "low") {
            scores.lebanon += 3;
            scores.japan += 1;
            scores.greece += 1;
        }

        if (answers.budget === "medium") {
            scores.italy += 2;
            scores.greece += 2;
            scores.lebanon += 1;
            scores.japan += 1;
        }

        if (answers.budget === "high") {
            scores.switzerland += 2;
            scores.france += 2;
            scores.japan += 1;
            scores.greece += 1;
        }

        // Preferred experience

        if (answers.experience === "beach") {
            scores.greece += 3;
            scores.lebanon += 2;
            scores.italy += 1;
        }

        if (answers.experience === "nature") {
            scores.switzerland += 3;
            scores.lebanon += 2;
            scores.japan += 1;
        }

        if (answers.experience === "city") {
            scores.france += 2;
            scores.japan += 2;
            scores.italy += 2;
        }

        if (answers.experience === "history") {
            scores.italy += 3;
            scores.greece += 2;
            scores.japan += 1;
            scores.france += 1;
        }

        if (answers.experience === "food") {
            scores.lebanon += 3;
            scores.italy += 2;
            scores.japan += 1;
        }

        let recommendedId = "greece";
        let highestScore = -1;

        for (let id in scores) {

            if (scores[id] > highestScore) {
                highestScore = scores[id];
                recommendedId = id;
            }

        }

        return destinations.find(function(place) {
            return place.id === recommendedId;
        });

    }

    function handleNext() {

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResult(true);
        }

    }

    function handlePrevious() {

        if (showResult) {
            setShowResult(false);
            return;
        }

        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }

    }

    function handleRestart() {

        setCurrentStep(0);

        setAnswers({
            companion: "",
            occasion: "",
            duration: "",
            budget: "",
            experience: ""
        });

        setShowResult(false);

    }

    const currentQuestion = questions[currentStep];

    const recommendedDestination = showResult
        ? getRecommendedDestination()
        : null;

    return (

        <div className="trip-finder-page">

            {/* Hero Section */}

            <div className="trip-finder-hero">

                <div className="trip-finder-hero-content">

                    <h1>
                        Trip Finder <span>♡</span>
                    </h1>

                    <p>
                        Answer a few questions...
                        <br />
                        and discover your perfect destination!
                    </p>

                    <div className="trip-hero-decoration"></div>

                </div>

            </div>

            {/* Quiz Section */}

            <div className="trip-quiz-container">

                {!showResult ? (

                    <>

                        <div className="trip-quiz-progress">

                            <span>
                                Step {currentStep + 1} of {questions.length}
                            </span>

                            <span className="progress-plus">+</span>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{
                                        width:
                                            ((currentStep + 1) / questions.length) * 100 + "%"
                                    }}
                                ></div>
                            </div>

                            <p>Let's find your dream trip! ✨</p>

                        </div>

                        <div className="trip-question-heading">

                            <div className="trip-question-icon">
                                {currentQuestion.icon}
                            </div>

                            <div>
                                <h2>{currentQuestion.title}</h2>
                                <p>{currentQuestion.subtitle}</p>
                            </div>

                        </div>

                        <div className="trip-options-grid">

                            {currentQuestion.options.map(function(option) {

                                return (

                                    <button
                                        key={option.value}
                                        className={
                                            answers[currentQuestion.id] === option.value
                                                ? "trip-option-card selected"
                                                : "trip-option-card"
                                        }
                                        onClick={function() {
                                            handleAnswer(option.value);
                                        }}
                                    >

                                        {option.image ? (

                                            <img
                                                src={option.image}
                                                alt={option.label}
                                            />

                                        ) : (

                                            <div className="trip-option-emoji">
                                                {option.emoji}
                                            </div>

                                        )}

                                        <span>{option.label}</span>

                                        {answers[currentQuestion.id] === option.value && (
                                            <div className="trip-option-check">
                                                <CheckCircleIcon />
                                            </div>
                                        )}

                                    </button>

                                );

                            })}

                        </div>

                        <div className="trip-quiz-bottom">

                            {currentStep > 0 ? (

                                <button
                                    className="trip-previous-button"
                                    onClick={handlePrevious}
                                >
                                    <ArrowBackIcon />
                                    Previous
                                </button>

                            ) : (
                                <div></div>
                            )}

                            <button
                                className="trip-next-button"
                                onClick={handleNext}
                                disabled={!answers[currentQuestion.id]}
                            >
                                {currentStep === questions.length - 1
                                    ? "Find My Destination"
                                    : "Next Step"
                                }

                                <ArrowForwardIcon />
                            </button>

                        </div>

                    </>

                ) : (

                    <div className="trip-result-heading">

                        <LocationOnIcon />

                        <h2>Your answers are ready!</h2>

                        <p>
                            We found a destination that matches your travel preferences.
                        </p>

                    </div>

                )}

            </div>

            {/* Result Section */}

            {showResult && recommendedDestination && (

                <div className="trip-result-section">

                    <div className="trip-result-image">

                        <img
                            src={recommendedDestination.image}
                            alt={recommendedDestination.name}
                        />

                    </div>

                    <div className="trip-result-content">

                        <LocationOnIcon className="trip-result-location-icon" />

                        <h3>Your Perfect Destination is...</h3>

                        <h2>{recommendedDestination.name} <span>♡</span></h2>

                        <p className="trip-result-description">
                            {recommendedDestination.description}
                        </p>

                        <div className="trip-result-reasons">

                            <h4>Why {recommendedDestination.name}?</h4>

                            {recommendedDestination.reasons.map(function(reason, index) {

                                return (
                                    <p key={index}>
                                        <CheckCircleIcon />
                                        {reason}
                                    </p>
                                );

                            })}

                        </div>

                        <Link
                            to={"/destination/" + recommendedDestination.id}
                            className="trip-explore-button"
                        >
                            Explore {recommendedDestination.name}
                            <ArrowForwardIcon />
                        </Link>

                        <button
                            className="trip-restart-button"
                            onClick={handleRestart}
                        >
                            Try Again
                        </button>

                    </div>

                </div>

            )}

            {/* Bottom Decoration */}

            <div className="trip-finder-bottom-text">
                Let MOLIN guide you to your next adventure ♡
                <FlightTakeoffIcon />
            </div>

        </div>

    );

}

export default TripFinder;
