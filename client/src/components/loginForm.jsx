import React, {useState} from 'react'
import Input from '../common/input'
import SignInButton from './signInButton'

const LoginForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    // place holder for form submission
    e.preventDefault()
    console.log('Clicked Login Button')
  }

  // ensures any extraneous characters (hash #) and/or old routes are removed after signing out
  window.history.replaceState(null, 'ComLog', '/')

  return(
    <div className="container pt-3">
      <div className="row align-items-center"  style={{minHeight: "60vh"}}>
        <div className="col">
          <h1>Login</h1>
        </div>
        <div className="col">
          <form onSubmit={(e) => handleSubmit(e)}>

              <div className="mb-3">
                <Input
                  id="username"
                  name="username"
                  type="text"
                  label="Username"
                  error=""
                  value={username}
                  onChange={(e) => {setUsername(e.target.value)}}
                />
              </div>
              <div className="mb-3">
                <Input 
                  id="password"
                  name="password"
                  type="text"
                  label="Password"
                  error=""
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
                />
              </div>
              <button className="btn btn-secondary">Login</button>

            </form>
    
            <hr style={{margin: "3rem 0"}}/>

              <p>Okaloosa County School District Single Sign-On</p>
              <SignInButton />
        
        </div>
      </div>
    </div>
  )
}
export default LoginForm