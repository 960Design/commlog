export async function getUsers(username) {
  try{
    const response = await fetch(`http://localhost:8000/users/${username}`)
    const result = await response.json()
    return result
  }
  catch(e){
    console.error(e)
  }
}
