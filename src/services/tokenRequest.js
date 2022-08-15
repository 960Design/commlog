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

const focus = '/focus/api/1.0/token'
const dev = '/dev/api/1.0/token'

let headers = new Headers()
headers.append("Authorization", process.env.REACT_APP_FSS_HEADER_AUTHORIZATION)
headers.append('Content-Type', 'application/x-www-form-urlencoded')

let urlencoded = new URLSearchParams()
urlencoded.append("grant_type", "client_credentials");

let requestOptions = {
  method: 'POST',
  headers: headers,
  body: urlencoded,
  redirect: 'follow'
}

export async function requestToken() {
  try{
    let response = await fetch(focus, requestOptions)
    let result = await response.json()
    sessionStorage.setItem('token', result.access_token)
    return result.access_token
  }
  catch(e){
    console.error(e)
  }
}