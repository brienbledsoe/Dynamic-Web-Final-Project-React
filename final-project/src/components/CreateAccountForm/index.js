import React from 'react'
export default function CreateAccountForm({ submitFunction }) {
  return(
    <div>
      <form className = "loginForm" onSubmit ={ e => submitFunction(e)}>
        <label htmlFor="createEmail">Email</label>
        <input type="email" name="createEmail" placeholder="Email"/>
        <label htmlFor="createPassword">Password</label>
        <input type="password" name="createPassword" placeholder="Password"/>
        <button id="signupButton">Create Account</button>
      </form>
    </div>
  );

}
