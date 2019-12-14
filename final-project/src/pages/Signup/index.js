import React from 'react'

import CreateAccountForm from "../../components/CreateAccountForm"

export default function Signup({ signupFunction }) {
  return(
    <div>
      <div>Sign-up</div>
      <CreateAccountForm submitFunction={ signupFunction } />
    </div>
  );

}
