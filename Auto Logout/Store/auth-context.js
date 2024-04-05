import React, { useState, useEffect } from "react"

const AuthContext= React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token)=> {},
    logout: ()=> {}
})

 export const AuthContextProvider= (props) =>{
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
    const [logoutTimer, setLogoutTimer] = useState(null);

    useEffect(() => {
        if (token) {
          const logoutTimer = setTimeout(() => {
            logoutHandler();
            alert("Your session has expired. Please login again.");
          }, 1 * 60 * 1000);
    
          setLogoutTimer(logoutTimer);
        } else {
          clearTimeout(logoutTimer);
        }
    
        return () => {
          clearTimeout(logoutTimer);
        };
      }, [token, logoutTimer]);


    const userIsLoggedIn= !!token;

    const loginHandler= (token)=> {
        setToken(token)
        localStorage.setItem('token', token)

    }
   const logoutHandler= ()=> {
      setToken(null) 
      localStorage.removeItem('token')
   }

const contextValue= {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,

}


   return  <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext