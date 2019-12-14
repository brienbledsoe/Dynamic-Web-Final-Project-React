import React from 'react'
import LoginForm from "../../components/LoginForm"

export default function Login({loginFunction}) {
  return(
    <div>
      <LoginForm submitFunction={loginFunction} />
    </div>

  );

}
