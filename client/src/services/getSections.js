export async function getSections(uuid) {
  try{
    const response = await fetch(`http://localhost:8000/sections/${uuid}`)
    const result = await response.json()
    return result
  }
  catch(e){
    console.error(e)
  }
}