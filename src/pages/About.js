import React from "react";
import "../styles/about.css";

function About() {
    const values = [
        {
            icon: "◎",
            title: "Explore",
            subtitle: "the World"
        },
        {
            icon: "♡",
            title: "Create",
            subtitle: "Memories"
        },
        {
            icon: "✧",
            title: "Travel with",
            subtitle: "Confidence"
        },
        {
            icon: "♧",
            title: "Respect",
            subtitle: "Nature"
        }
    ];

    return (
        <div className="about-page">

            {/* Hero Section */}
            <section className="about-hero">

                <div className="about-hero-image">
                    <img
                        src="/images/about-hero.png"
                        alt="Traveler enjoying a beautiful mountain view"
                    />
                </div>

                <div className="about-hero-content">
                    <h1>About Us</h1>

                    <div className="about-title-decoration">
                        <span></span>

                        <svg viewBox="0 0 60 35">
                            <path
                                d="M3 30 L20 13 L29 23 L40 5 L57 30"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 30 L29 19 L37 30"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>

                        <span></span>
                    </div>
                </div>

            </section>


            {/* Who We Are Section */}
            <section className="who-we-are">

                <div className="about-text-content">

                    <div className="about-section-heading">
                        <h2>Who We Are?</h2>
                        <span></span>
                    </div>

                    <p className="about-description">
                        At MOLIN, we believe that travel is more than just
                        a journey — it’s a way to create lasting memories,
                        explore the beauty of our world, and experience
                        life in nature.
                    </p>

                    <p className="about-description">
                        We are a passionate team of travelers, dreamers,
                        and explorers, committed to helping you discover
                        the most amazing destinations, plan unforgettable
                        trips, and make every journey truly special.
                    </p>


                    {/* Our Values */}
                    <div className="about-values">

                        {values.map((value, index) => (
                            <div className="about-value" key={index}>

                                <div className="about-value-icon">
                                    {value.icon}
                                </div>

                                <p>
                                    {value.title}
                                    <br />
                                    {value.subtitle}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>


                {/* Travel Photos */}
                <div className="about-photo-area">

                    <div className="about-photo coastal-photo">
                        <img
                            src="/images/costal-town.jpg"
                            alt="Beautiful Italian coastal town"
                        />
                    </div>

                    <div className="about-photo paris-photo">
                        <img
                            src="/images/eiffel-tower.jpg"
                            alt="Eiffel Tower in Paris"
                        />
                    </div>

                    <div className="about-photo lake-photo">
                        <img
                            src="/images/mountain-lake.jpg"
                            alt="Beautiful alpine lake"
                        />
                    </div>


                    {/* Decorative airplane */}
                    <div className="about-plane">✈</div>

                    <div className="about-flight-path">
                        <svg viewBox="0 0 180 180">
                            <path
                                d="M10 20 C100 -10 160 45 145 100 C135 135 175 145 155 165"
                                fill="none"
                                stroke="#174b3d"
                                strokeWidth="1.5"
                                strokeDasharray="5 6"
                            />
                        </svg>
                    </div>


                    {/* Travel More Stamp */}
                    <div className="travel-stamp">
                        <span>TRAVEL</span>

                        <svg viewBox="0 0 55 35">
                            <path
                                d="M3 29 L19 12 L28 22 L39 5 L52 29"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            />
                        </svg>

                        <span>MORE</span>
                    </div>

                </div>

            </section>


            {/* Our Mission */}
            <section className="about-mission" id="mission">

                <div className="mission-decoration"></div>

                <h2>Our Mission</h2>

                <p>
                    Making every journey meaningful, memorable,
                    and full of beautiful discoveries.
                </p>

            </section>

        </div>
    );
}

export default About;
