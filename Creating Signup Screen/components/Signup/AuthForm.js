import { useState, useRef, useContext } from 'react';
import { AuthContext } from '../../Store/AuthContext';
import classes from './AuthForm.module.css';


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null); // New state for error handling
  const authCtx = useContext(AuthContext);
  

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setError(null); // Reset error message when switching auth mode
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef(); // New reference for confirm password input

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value; // Get confirm password value

    if (!isLogin && enteredPassword !== enteredConfirmPassword) {
      setError('Passwords do not match'); // Set error if passwords don't match
      return;
    }

    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVbUdX67Ed2Oe0rBXhgPCM1avmUtDoOVk';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVbUdX67Ed2Oe0rBXhgPCM1avmUtDoOVk';
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
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
          confirmPasswordInputRef.current.value = ''; // Reset confirm password input
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
        authCtx.login(data.idToken, data.email, data.password);
      
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
    </section>
  );
};

export default AuthForm;
