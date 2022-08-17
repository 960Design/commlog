// server
const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Enable cors
app.use(cors())


app.get('/', (req, res) => {
  res.json('hi!')
})

app.get('/token', async (req, res) => {
  /**
   * Requests bearer token using x-www-form-urlencoded (required)
   * POST to https://okaloosa.focusschoolsoftware.com/focus/api/1.0/token
   *    grant_type: client_credentials
   *    client_id: {requested through Focus Third Party App}
   *    client_secret: {requested through Focus Third Party App}
   *    scope: *
   * RESPONSE JSON:
   * {
    "request_id": 311,
    "access_token": "a120a9cd640331c311ca019a4bb0542b5dce52401e991b58d6048f5563bd5d91",
    "token_type": "bearer",
    "expiration": "2022-07-21T18:20:04.000Z",
    "expires_in": 2462,
    "scope": "*"
    }
  */
 /* "proxy": "https://okaloosa.focusschoolsoftware.com", */
  
  const FOCUS_API_URL = process.env.REACT_APP_FOCUS_API_URL
  const FOCUS_DEV_API_URL = process.env.REACT_APP_FOCUS_DEV_API_URL
  const HEADER_AUTH = process.env.REACT_APP_FSS_HEADER_AUTHORIZATION
  
  const headers = new Headers()
  headers.append('Authorization', HEADER_AUTH)
  headers.append('Content-Type', 'application/x-www-form-urlencoded')
  
  const urlencoded = new URLSearchParams()
  urlencoded.append("grant_type", "client_credentials");
  
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: urlencoded,
    redirect: 'follow'
  } 
  
  try{
    const response = await fetch(FOCUS_API_URL, requestOptions)
    const result = await response.json()
    res.status(200).json(result)
    // set sessionStorage on client side
    //sessionStorage.setItem('token', result.access_token)
  }
  catch(e){
    res.status(500).json({e})
  }
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

