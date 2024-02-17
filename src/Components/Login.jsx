import React from 'react'
import './Login.css'
import Button from './Button'
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container">
      <div className="glass1">
    <div className="login-container">
        <img src="/src/images/login.jpg" alt="login form" />
        <p>Username</p>
        <input type="text" required placeholder='Enter your username'/>
        <p>Password</p>
        <input type="password" required placeholder='Enter your password'/>
        <a href='/login'>Forgot Password?</a>
        <div></div>
        <Button width='100%' href='/login' text ='Login'/>
        <Link to='/signup'>Don't have an account?</Link>
        <Button width='100%' secondary = 'secondary' href='/login' text ='Sign up'/>
    </div>
      </div>
    </div>
  )
}

export default Login