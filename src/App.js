import React from 'react'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import NavBar from './common/navBar'
import LoginForm from './components/loginForm'
import Home from './components/home'

const App = () => {

  return (
    <>
      <main className='container'>
        <NavBar />
        <UnauthenticatedTemplate>
          <LoginForm />
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <Home />
        </AuthenticatedTemplate>
      </main>
    </>
  )
}
export default App

/*
  element={<Home isAuth={isAuthenticated}/>} />
  <Route path='/login' element={<LoginForm isAuth={isAuthenticated} />} />
*/
