import React from 'react'
export default function LoginForm({submitFunction}) {
  return(

    <div>
      <form className="flex-container" onSubmit ={(e) => {submitFunction(e)}}>
        <div>
        <label htmlFor="loginEmail">Email</label>
        </div>

        <div><input type="email" name="loginEmail" placeholder="Email"/></div>



        <div>
        <label htmlFor="loginPassword">Password</label>
        </div>

        <div><input className="pass"type="password" name="loginPassword" placeholder="Password"/></div>


        <div><button>Log in</button></div>
      </form>
    </div>

  );

}
