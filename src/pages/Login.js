import React from "react";
import "../assets/css/Login.css";

function Login() {
  return (
    <div>
      <h2>LOGIN</h2>
      <form>
        <div className='movieEmail'>
          <label>Email</label>
          <input type='text' />
        </div>
        <div className='passwordSection'>
          <label>Password</label>
          <input type='password' />
        </div>

        <button id='btnLogin'>Login</button>
      </form>
    </div>
  );
}

export default Login;
