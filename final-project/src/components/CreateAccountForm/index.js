import React from 'react'

export default function CreateAccountForm({ submitFunction }) {
  return(
    <div>
      <form onSubmit ={ e => submitFunction(e)}>
        <label htmlFor="createEmail">Email</label>
        <input type="email" name="createEmail" placeholder="Email"/>
        <label htmlFor="createPassword">Password</label>
        <input type="password" name="createPassword" placeholder="Password"/>
        <button>Create Account</button>
      </form>
    </div>
  );

}
