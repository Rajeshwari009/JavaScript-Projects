import React, { useRef } from 'react';
import classes from './Profile.module.css'; // Import CSS module

import { useContext } from 'react';
import { AuthContext } from '../Store/AuthContext';

const Profile = () => {
    const fullname = useRef();
    const profileUrl = useRef();
    const authCtx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredFullName = fullname.current.value;
        const enteredProfileUrl = profileUrl.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCVbUdX67Ed2Oe0rBXhgPCM1avmUtDoOVk', {
            method: "POST",
            body: JSON.stringify({
                idToken: authCtx.token,
                displayName: enteredFullName,
                photoUrl: enteredProfileUrl,
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json(), alert("Profile updated"))
        .then(data => console.log(data))
        .catch(error => alert(error));
    };

    return (
        <div className={classes.container}>
            <form onSubmit={submitHandler} className={classes.form}>
                <h1> Update Your Profile</h1>
                <label htmlFor='displayName'></label>
                Full Name: <input type='text' required id='displayName' ref={fullname}></input>
                <label htmlFor='photo'></label>
                Profile Photo URL: <input type='text' id='photo' required ref={profileUrl}></input>
                <button className={classes.updateButton}>Update</button>
            </form>
        </div>
    );
}

export default Profile;
