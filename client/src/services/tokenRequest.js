export async function requestToken(){
  try{
    let response = await fetch('http://localhost:8000/token')
    let result = await response.json()
    sessionStorage.setItem('token', result.access_token)
    return result.access_token
  }
  catch(e){
    console.error(e)
  }
}