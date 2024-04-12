import { useState, useRef, useContext } from 'react';
import { AuthContext } from '../../Store/AuthContext';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom'









const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);
  const history= useHistory()
  const authCtx = useContext(AuthContext);


  

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setError(null); // Reset error message when switching auth mode
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef(null);


  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef?.current?.value;

    if (!isLogin && enteredPassword !== enteredConfirmPassword) {
      setError('Passwords do not match'); // Set error if passwords don't match
      return;
    }

    setIsLoading(true);

    let url;
    let requestType = 'PASSWORD_RESET';
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVbUdX67Ed2Oe0rBXhgPCM1avmUtDoOVk';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVbUdX67Ed2Oe0rBXhgPCM1avmUtDoOVk';
    }

    if (!isLogin && enteredEmail) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCVbUdX67Ed2Oe0rBXhgPCM1avmUtDoOVk';
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
        requestType: requestType,

      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          setIsAuth(true);
          console.log("User has successfully signed up.");

          setTimeout(() => {
            setIsAuth(false);
          }, 3000);
          emailInputRef.current.value = '';
          passwordInputRef.current.value = '';
          if (confirmPasswordInputRef.current) {
            confirmPasswordInputRef.current.value = ''; // Set value if current ref exists
          }
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("data received from api")
        authCtx.login(data.idToken, data.email, data.password);
        history.push("/welcome")
     
       
      })
      .catch((err) => {
        setError(err.message); // Set error message if authentication fails
      });
  };

  return (
    
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {isAuth && <p>Authentication successful..!</p>}
      {error && <p className={classes.error}>{error}</p>} {/* Display error message */}

      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        {!isLogin && (
  /* Render confirm password input only for sign up */
  <div className={classes.control}>
    <label htmlFor='confirm-password'>Confirm Password</label>
    <input
      type='password'
      id='confirm-password'
      required
      ref={confirmPasswordInputRef}
    />
  </div>
)}

        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create account'}</button>
          )}
          {isLoading && <p>Fetching details...</p>}

          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      {isLogin && (
        <button
          className={classes.forget}
          onClick={switchAuthModeHandler}
        >
          Forgot Password?
        </button>
      )}
    </section>
   
  );
};

export default AuthForm;
