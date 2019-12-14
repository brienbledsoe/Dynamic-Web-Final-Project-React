import React from 'react'
import LoginForm from "../../components/LoginForm"

export default function Login({loginFunction}) {
  return(
    <div>
      <div>Logging in</div>
      <LoginForm submitFunction={loginFunction} />
    </div>

  );

}
