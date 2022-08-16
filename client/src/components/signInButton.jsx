import React from 'react'
import { useMsal } from '@azure/msal-react'
import { loginRequest } from '../services/authConfig'

function handleLogin(instance) {
  instance.loginRedirect(loginRequest).catch(e => {
    console.log(e);
  })
}

const SignInButton = () => {
  const { instance } = useMsal();
  
  return(
    <button 
      className="btn btn-primary"
      onClick={() => handleLogin(instance)}
    >
      Okaloosa County Single Sign-On
    </button>
  )
}
export default SignInButton

