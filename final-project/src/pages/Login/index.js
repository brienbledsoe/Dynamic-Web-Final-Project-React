import React from 'react'
//this is the componenet that we're pushing here
import LoginForm from "../../components/LoginForm"

export default function Login({loginFunction}) {
  return(
    <div>
      <div>Logging in</div>
      <LoginForm submitFunction={loginFunction} />
    </div>

  );

}
