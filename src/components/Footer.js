import React from "react";
import { Link } from "react-router-dom";
import LandscapeIcon from "@mui/icons-material/Landscape";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">

            {/* Logo */}
            <Link to="/" className="footer-logo">
                <div className="footer-logo-design">
                    <LandscapeIcon className="footer-mountain" />
                    <FlightTakeoffIcon className="footer-plane" />
                </div>

                <div className="footer-logo-text">
                    <h2>MOLIN</h2>
                    <p>Memories Of Life In Nature</p>
                </div>
            </Link>

            <div className="footer-divider"></div>

            {/* Navigation Links */}
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/destinations">Destinations</Link>
                <Link to="/trip-finder">Trip Finder</Link>
                <Link to="/about">About</Link>
            </div>

            <div className="footer-divider"></div>

            {/* Social Media */}
            <div className="footer-social">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <InstagramIcon />
                </a>

                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <FacebookIcon />
                </a>

                <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
                    <WhatsAppIcon />
                </a>
            </div>

            <div className="footer-divider"></div>

            {/* Footer Message */}
            <div className="footer-message">
                <h3>More than a trip...</h3>
                <p>a lifetime of memories ♡</p>
            </div>

        </footer>
    );
}

export default Footer;
