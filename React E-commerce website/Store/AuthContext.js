import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token, email) => {},
    logout: () => {},
    userEmail: '',
});

const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const initialEmail = localStorage.getItem('email');
    const [token, setToken] = useState(initialToken);
    const [userEmail, setUserEmail] = useState(initialEmail);

    useEffect(() => {
        const logoutTimer = setTimeout(() => {
            logoutHandler();
            alert("Your session has expired. Please login again.");
        }, 120 * 60 * 1000); 

        
        return () => clearTimeout(logoutTimer);
    }, [token]); 

    const loginHandler = (token, email) => {
        // Clear cart data if a new user logs in
        const isNewUser = email !== userEmail;
        if (isNewUser) {
            // Clear cart data here
            localStorage.removeItem('cart');
        }

        setToken(token);
        setUserEmail(email);
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
    };

    const logoutHandler = () => {
        setToken(null);
        setUserEmail(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    };

    const userIsLoggedIn = !!token;

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        userEmail: userEmail,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
