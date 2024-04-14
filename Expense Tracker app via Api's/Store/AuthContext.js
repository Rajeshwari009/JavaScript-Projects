import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


export const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token, email) => {},
    logout: () => {},
    userEmail: '',
});

const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [userEmail, setUserEmail] = useState();
    const history= useHistory()


    useEffect(() => {
        const logoutTimer = setTimeout(() => {
            logoutHandler();
            alert("Your session has expired. Please login again.");
        }, 120* 60 * 1000); 

        
        return () => clearTimeout(logoutTimer);
    }, [token]); 

    const loginHandler = (token, email) => {
        setToken(token);
        setUserEmail(email);
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        history.push("/")
      
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

