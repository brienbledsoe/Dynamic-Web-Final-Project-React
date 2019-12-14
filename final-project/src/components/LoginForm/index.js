import React from 'react'
export default function LoginForm({submitFunction}) {
  return(

    <div>
      <form className="loginForm" onSubmit ={(e) => {submitFunction(e)}}>
        <label htmlFor="loginEmail">Email</label>
        <input type="email" name="loginEmail" placeholder="Email"/>
        <label htmlFor="loginPassword">Password</label>
        <input className="pass"type="password" name="loginPassword" placeholder="Password"/>
        <button id="loginButton">Login</button>
      </form>
    </div>

  );

}
