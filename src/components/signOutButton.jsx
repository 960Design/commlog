import React from "react";
import { useMsal } from "@azure/msal-react";


// does this need to be outside SignOutButton?
function handleLogout(instance) {
  sessionStorage.removeItem('token')
  instance.logoutRedirect().catch(e => {
      console.error(e);
  });
}

/**
 * Renders a sign-out button
 */
const SignOutButton = () => {
    const { instance } = useMsal();


    //const handleLogout = (instance) => {
    //  instance.logoutRedirect();
    //}


    return (
      <button 
        className="btn btn-outline-dark me-2" 
        type="button"
        onClick={() => handleLogout(instance)}
      >
          Sign-Out
      </button>
    )
}
export default SignOutButton