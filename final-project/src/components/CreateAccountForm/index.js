import React from 'react'
export default function CreateAccountForm({ submitFunction }) {
  return(
    <div>
      <form className = "flex-container" onSubmit ={ e => submitFunction(e)}>
        <div><label htmlFor="createEmail">Email</label></div>
        <div><input type="email" name="createEmail" placeholder="Email"/></div>
        <div><label htmlFor="createPassword">Password</label></div>
        <div><input type="password" name="createPassword" placeholder="Password"/></div>
        <div><button>Create Account</button></div>
      </form>
    </div>
  );

}
