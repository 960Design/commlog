// server
const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const FOCUS_API_URL = process.env.REACT_APP_FOCUS_API_URL
const FOCUS_DEV_API_URL = process.env.REACT_APP_FOCUS_DEV_API_URL
let accessToken = ''

// Enable cors
app.use(cors())


app.get('/', (req, res) => {
  res.json('hi!')
})

app.get('/students/:uuid', async (requ, res) => {
  const uuid = req.params.uuid
  const requestOption = {
    method: 'GET',
    headers: {'Authorization': 'Bearer ' + accessToken},
    redirect: 'follow'
  }
  try{

  }
  catch(e){
    res.status(500).json({e})
  }
})

app.get('/sections/:uuid', async (req, res) => {
  const uuid = req.params.uuid
  const requestOptions = {
    method: 'GET',
    headers: {'Authorization': 'Bearer ' + accessToken},
    redirect: 'follow'
  }
  //section_uuid from /users/:uuid/enrollements
  try{
    const response = await fetch(FOCUS_API_URL + `/users/${uuid}/enrollments`, requestOptions)
    const result = await response.json()
    res.status(200).json(result)
  }
  catch(e){
    res.status(500).json({e})
  }
})


app.get('/users/:username', async (req, res) => {
  const username = req.params.username
  const requestOptions = {
    method: 'GET',
    headers: {'Authorization': 'Bearer ' + accessToken},
    redirect: 'follow'
  }
  try{
    const response = await fetch(FOCUS_API_URL + `/users?filter=username=${username}`, requestOptions)
    const result = await response.json()
    res.status(200).json(result)
  }
  catch(e){
    res.status(500).json({e})
  }
  
})
///users?filter=username=first.last@schools.com
//const username = req.params.username
//res.json(`username = ${username}`)


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
  
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': process.env.REACT_APP_FSS_HEADER_AUTHORIZATION,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials',
    redirect: 'follow'
  }
  
  try{
    const response = await fetch(FOCUS_API_URL + '/token', requestOptions)
    const result = await response.json()
    if (result.access_token) {
      accessToken = result.access_token
    }
    res.status(200).json(result)
  }
  catch(e){
    res.status(500).json({e})
  }
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

