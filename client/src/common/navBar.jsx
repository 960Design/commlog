import React from 'react'
import { useIsAuthenticated } from "@azure/msal-react";
import SignOutButton from '../components/signOutButton'

const NavBar = (props) => {
  const isAuth = useIsAuthenticated()

  return(
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Communications Log</span>
          <div className="d-flex" role="">
            {isAuth && (
              <>
                <span className="navbar-text mx-3">Dana Fusco</span>
                <SignOutButton />
              </>
            )}
          </div>
        </div>
      </nav>
      {/*props.children*/}
    </>
  )
}
export default NavBar