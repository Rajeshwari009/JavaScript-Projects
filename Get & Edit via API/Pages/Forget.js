import React, { useRef } from 'react';
import classes from './Forget.module.css'; // Import CSS module


const Forget = () => {
    const emailEntered = useRef();

    const forgetHandler = (event) => {
        event.preventDefault();
        const emailEnteredref = emailEntered.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCVbUdX67Ed2Oe0rBXhgPCM1avmUtDoOVk', {
            method: "POST",
            body: JSON.stringify({ requestType: "PASSWORD_RESET", email: emailEnteredref }),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Verification link sent');
        })
        .catch(error => alert(error));
    };

    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <form>
                    <label htmlFor='email'></label>
                    <h2>Enter Your Email To Reset Password: </h2>
                    <input type='email' id='email' required ref={emailEntered} />
                    <button className={classes.forget} onClick={forgetHandler}>Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default Forget;
