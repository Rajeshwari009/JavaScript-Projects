import classes from './ProfileForm.module.css';
import { useRef, useContext} from 'react';
import AuthContext from '../../Store/auth-context';
import { useHistory } from 'react-router-dom'

const ProfileForm = () => {
  const authCtx= useContext(AuthContext)
  const history= useHistory()


const newPasswordInputref= useRef()


const submitHandler= (event) => {
  event.preventDefault();
  const enteredNewPassword= newPasswordInputref.current.value
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDYEGo9KIc1eCdsIstDVUYm1Ql2cFnsQA8', {
    method:'POST',
    body:JSON.stringify({
      idToken:authCtx.token,
      password:enteredNewPassword,
      returnSecureToken: false,

    }),
    headers:{
      'Content-Type': 'application/json'
    }

  }).then(res=>{
    history.replace('/')
  })

}


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={ newPasswordInputref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
