import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GoogleIcon from "@mui/icons-material/Google";

import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";

function Auth() {

    const { signup, login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [agree, setAgree] = useState(false);
    const [message, setMessage] = useState("");

    function handleSignup(event) {

        event.preventDefault();
        setMessage("");

        if (!name || !email || !password || !confirmPassword) {
            setMessage("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        if (!agree) {
            setMessage("Please accept the Terms and Conditions.");
            return;
        }

        const result = signup(name, email, password);

        if (result) {
            navigate("/");
        } else {
            setMessage("This email is already registered.");
        }
    }

    function handleLogin(event) {

        event.preventDefault();
        setMessage("");

        if (!email || !password) {
            setMessage("Please enter your email and password.");
            return;
        }

        const result = login(email, password);

        if (result) {
            navigate("/");
        } else {
            setMessage("Incorrect email or password.");
        }
    }

    function changeMode() {
        setIsLogin(!isLogin);
        setMessage("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <div 
        className="auth-page"
        style= {{
            backgroundImage: "url('/images/signup-background.png')"
        }}
        
        >

            {/* Top Login / Signup Link */}
            <div className="auth-top-link">

                {isLogin ? (
                    <>
                        Don't have an account?
                        <button onClick={changeMode}>
                            Sign Up <ArrowForwardIcon />
                        </button>
                    </>
                ) : (
                    <>
                        Already have an account?
                        <button onClick={changeMode}>
                            Login <ArrowForwardIcon />
                        </button>
                    </>
                )}

            </div>

            <div className="auth-content">

                {/* Left Side */}
                <div className="auth-brand">

                    <div className="auth-brand-logo">
                        <h1>MOLIN</h1>
                        <p>Memories Of Life In Nature</p>
                    </div>

                </div>

                {/* Form Card */}
                <div className="auth-card">

                    <h2>
                        {isLogin ? "Welcome Back" : "Create Your Account"}
                    </h2>

                    <p className="auth-subtitle">
                        {isLogin
                            ? "Continue your journey with MOLIN"
                            : "Let's plan your next journey together"}
                    </p>

                    <div className="auth-heart">
                        <span></span>
                        ♡
                        <span></span>
                    </div>

                    <form onSubmit={isLogin ? handleLogin : handleSignup}>

                        {!isLogin && (
                            <div className="auth-input">
                                <PersonIcon />

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                        )}

                        <div className="auth-input">
                            <EmailIcon />

                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="auth-input">
                            <LockIcon />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword
                                    ? <VisibilityIcon />
                                    : <VisibilityOffIcon />}
                            </button>
                        </div>

                        {!isLogin && (
                            <div className="auth-input">
                                <LockIcon />

                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword
                                        ? <VisibilityIcon />
                                        : <VisibilityOffIcon />}
                                </button>
                            </div>
                        )}

                        {!isLogin && (
                            <label className="auth-terms">
                                <input
                                    type="checkbox"
                                    checked={agree}
                                    onChange={(event) => setAgree(event.target.checked)}
                                />

                                <span>
                                    I agree to the
                                    <a href="#terms"> Terms & Conditions </a>
                                    and
                                    <a href="#privacy"> Privacy Policy</a>
                                </span>
                            </label>
                        )}

                        {message && (
                            <p className="auth-message">{message}</p>
                        )}

                        <button type="submit" className="auth-submit">
                            {isLogin ? "Login" : "Sign Up"}
                            <ArrowForwardIcon />
                        </button>

                    </form>

                    <div className="auth-or">
                        <span></span>
                        or continue with
                        <span></span>
                    </div>

                    <div className="auth-social">
                        <button type="button" disabled>
                            <GoogleIcon />
                            Google
                        </button>

                        <button type="button" disabled>
                            <span className="apple-symbol">●</span>
                            Apple
                        </button>
                    </div>

                    <div className="auth-bottom-link">

                        {isLogin ? (
                            <>
                                Don't have an account?
                                <button onClick={changeMode}>Sign Up</button>
                            </>
                        ) : (
                            <>
                                Already have an account?
                                <button onClick={changeMode}>Login</button>
                            </>
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Auth;
