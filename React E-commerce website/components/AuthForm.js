import { useState, useRef, useContext} from 'react';
import { AuthContext } from '../Store/AuthContext';
import { useHistory } from 'react-router-dom';
import './AuthForm.css'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null); // Include error state
  const history= useHistory()
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef?.current?.value;

    if (!isLogin && enteredPassword !== enteredConfirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyANK5ukP9HFB6SM5I9B4jZrEKRviWUqKwo';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyANK5ukP9HFB6SM5I9B4jZrEKRviWUqKwo';
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
          if (confirmPasswordInputRef.current) {
            confirmPasswordInputRef.current.value = '';
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
        console.log(data.email)
        history.push("/Product");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setError(null);
  };

  return (
    <div className="body1">
      <section className="auth">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        {isAuth && <p>Authentication successful..!</p>}
        {error && <p className="error">{error}</p>}

        <form onSubmit={submitHandler}>
          <div className="control">
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} placeholder='Enter your Email' />
          </div>
          <div className="control">
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
              placeholder='Enter Your Password'
            />
          </div>
          {!isLogin && (
            <div className="control">
              <label htmlFor='confirm-password'>Confirm Password</label>
              <input
                type='password'
                id='confirm-password'
                required
                ref={confirmPasswordInputRef}
                placeholder='Confirm your password'
              />
            </div>
          )}

          <div className="actions">
            {!isLoading && (
              <button>{isLogin ? 'Login' : 'Create account'}</button>
            )}
            {isLoading && <p>Fetching details...</p>}

            <button
              type='button'
              className="toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthForm;
