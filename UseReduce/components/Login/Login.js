import React, { useEffect, useReducer, useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispathEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });
  const [passwordState, dispathPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false,
  });

  const emailChangeHandler = (event) => {
    dispathEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispathPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  useEffect(() => {
    setFormIsValid(emailState.isValid && passwordState.isValid);
  }, [emailState.isValid, passwordState.isValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={() => dispathEmail({ type: 'INPUT_BLUR', val: emailState.value })}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={() => dispathPassword({ type: 'INPUT_BLUR', val: passwordState.value })}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;



























// import React, { useEffect, useState } from 'react';

// import Card from '../UI/Card/Card';
// import classes from './Login.module.css';
// import Button from '../UI/Button/Button';

// const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);


//   useEffect(()=>{
//     console.log('EFFECT RUNNING');

//     return () =>{
//       console.log('EFFECT CLEANUP')
//     }
//   },[])

//   useEffect(()=>{
//     const identifier= setTimeout(()=>{
//       console.log("checking form validity")
//       setFormIsValid(
//         enteredEmail.includes('@') && enteredPassword.trim().length > 6
//       );
//     }, 6000)

//     return ()=>{
//       console.log("CLEANUP!!")
//       clearTimeout(identifier)
    
//     }
    
//   } , [enteredEmail, enteredPassword])


//   const emailChangeHandler = (event) => { 
//     setEnteredEmail(event.target.value);
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);

//     setFormIsValid(
//       event.target.value.trim().length > 6 && enteredEmail.includes('@')
//     );
//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes('@'));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };

  


//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailIsValid === false ? classes.invalid : ''
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={enteredEmail}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordIsValid === false ? classes.invalid : ''
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={enteredPassword}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;
