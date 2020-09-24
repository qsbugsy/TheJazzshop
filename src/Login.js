import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './login.css';
import { auth } from './firebase.js';


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login = (event) => {
    event.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push("/");
    })
    .catch((e) => alert(e.message));

  }
  const register = (event) => {
    event.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push("/");
    })
    .catch((e) => alert(e.message));
  }
  return (
    <div className="login">
<Link to="/">
    <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
    alt=""
    />
    </Link>
    <div className="login_container">
    <h1>Sign In</h1>
    <form className="logo_form">
    <h5>Email</h5>
    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
    <h5>Password</h5>
    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
    <button onClick={login}type="submit" className='login-signinButton'>Sign In</button>
    </form>
    <p> By Signing in you agree to Amazon's condition of Use of Sales.
        Please Use our privacy Notice, our Cookies Notice and our
        internet-Based Ads Notice</p>
        <button onClick={register} className='login_registerButton'> Create Your Amazon Account</button>
    </div>
    </div>

  );
}

export default Login;
