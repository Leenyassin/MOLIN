
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import DestinationDetails from "./pages/DestinationDetails";
import { DestinationProvider } from "./context/DestinationContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import TripFinder from "./pages/TripFinder";

import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";

function AppContent() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const isAuthPage = location.pathname === "/signup";

    return (
        <div>

            {!isAuthPage && <Navbar />}

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/signup" element={<Auth />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/destinations" element={<Destinations />} />

                <Route path="/trip-finder" element={<TripFinder />} />

                <Route
                    path="/favorites/:category/:destinationId"
                    element={<Favorites />}
                />

                <Route
                    path="/favorites/:category"
                    element={<Favorites />}
                />

                <Route
                    path="/destination/:id"
                    element={<DestinationDetails />}
                />

            </Routes>

            {!isAuthPage && <Footer />}

        </div>
    );
}

function App() {

    return (
        <AuthProvider>

            <DestinationProvider>

                <FavoritesProvider>

                    <AppContent />

                </FavoritesProvider>

            </DestinationProvider>

        </AuthProvider>
    );
}

export default App;
