import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider(props) {

    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("molinUsers")) || []
    );

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("molinCurrentUser")) || null
    );

    useEffect(() => {
        localStorage.setItem("molinUsers", JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        localStorage.setItem("molinCurrentUser", JSON.stringify(currentUser));
    }, [currentUser]);

    function signup(name, email, password) {

        const existingUser = users.find(function(user) {
            return user.email === email;
        });

        if (existingUser) {
            return false;
        }

        const newUser = {
            name: name,
            email: email,
            password: password
        };

        setUsers([...users, newUser]);
        setCurrentUser(newUser);

        return true;
    }

    function login(email, password) {

        const foundUser = users.find(function(user) {
            return user.email === email && user.password === password;
        });

        if (foundUser) {
            setCurrentUser(foundUser);
            return true;
        }

        return false;
    }

    function logout() {
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{
            users: users,
            currentUser: currentUser,
            signup: signup,
            login: login,
            logout: logout
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
