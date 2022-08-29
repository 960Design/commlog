import React, {useState, useEffect} from 'react'
import { useMsal } from '@azure/msal-react'
import { requestToken } from '../services/tokenRequest'
import { getUsers } from '../services/getUsers'
import { getSections } from '../services/getSections'
import SearchBox from '../common/searchBox'
import CommunicationLog from './communicationLog'

function StudentList(){
  const { instance, accounts } = useMsal();
  const [token, setToken] = useState(null)
  const [schools, setSchools] = useState([])
  const [student, setStudent] = useState(null)
  const [userUUID, setUserUUID] = useState(null)
  const [user, setUser] = useState('')
  const [sections, setSections] = useState([])

  /*
  const list = async (userid) => {
    //const url = new URL(`https://jsonplaceholder.typicode.com/users/${userid}`)
    const url = `https://jsonplaceholder.typicode.com/users/${userid}`
    let data = await ( await fetch(url).catch(handleErr)).json()
    console.log('data: ', data)
    console.log('uuid: ', data.id)
    console.log('student: ', data.name)
    //setUserUUID(data.id)
    //setStudent(data.name)
    setName(data.name)
  }
  function handleErr(err){
    console.error(err)
  }
  //list(2)
  */

  
  

  useEffect(() => {
    requestToken().then(data => setToken(data))
  }, [])

  /*
  useEffect(() => {
    getData(someParam).then(data => setState(data))
  }, [someParam]) 
  */

  useEffect(() => {
    /* LIVE
    getUsers(accounts[0].username).then(data => setUser(data))
    */
   /* TEST */
   //const test = "holmanm@okaloosaschools.com"
   getUsers("holmanm@okaloosaschools.com").then(data => setUser(data))
  }, [accounts])


  // if teacher get current sections and students from each section
  //if (typeof myVar !== 'undefined')
  //if(user && user.data[0].role === 'teacher'){
  if(!user) { return <div>Loading user...</div>}

  if(user && user.data[0].role === 'teacher'){
    console.log('user: ', user)
    console.log('user.data[0].uuid: ' + user.data[0].uuid)
    console.log('user first last name: ' + user.data[0].first_name + " " + user.data[0].last_name)
    console.log('user active: ' + user.data[0].active)
    console.log('user role: ' + user.data[0].role)
    //getSections(user.data[0].uuid).then(data => setSections(data))
    console.log('sections: ' + sections)


  }

  if(!sessionStorage.getItem('token')) {return <div>Loading token...</div>}
  

  // if bearer token is available send request to focus API
  if(token){
    // get user uuid from token username (school district email)
    // maybe should do on server side?
    //setUserUUID( fetch('http://localhost:8000/uuid') )
    

    /*
    // username is mic
    const getUser = async (username) => {
      //const url = new URL(`https://jsonplaceholder.typicode.com/users/${userid}`)
      const url = `https://okaloosa.focusschoolsoftware.com/focus/api/1.0/users?filter=username=${username}`
      let data = await ( await fetch(url).catch(handleErr)).json()
      console.log('data: ', data)
      //setUserUUID(data.id)
      //setStudent(data.name)
      //setName(data.name)
    }
    */
    //getUsers(accounts[0].username)
    //setName()
    //console.log('getUsers = ' + getUsers(accounts[0].username))

    
  }


  
  const bearer = "Bearer " + token
  console.log('studentList.jsx bearer: ', bearer)
  console.log('studentList.jsx schools: ', schools)

  // if bearer token is available send request to focus API


  

  //const schools = fetch(schoolsUrl, requestOptions)
  

  
  console.log('studentList.jsx accounts: ', accounts)
  console.log('studentList.jsx token: ', token)
  console.log('studentList.jsx account username: ', accounts[0].username)
  //console.log('setToken: ', token)
  //console.log('token', token)

  const handleStudentSelect = (uuid) => {
    console.log('hSS: ', uuid)
    setStudent(uuid)
  }

  // if student selected show historical communications and add comm log to right
  if (student) {
    return (<CommunicationLog student={student} name={accounts[0].name}/>)
  }
  
  
  return(
    <div>
      <SearchBox />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
           <th>Name</th>
           <th>Grade</th>
           <th>School</th>
           <th>Center</th>
           <th>Enrolled</th>
          </tr>
        </thead>

        <tbody>
          <tr onClick={() => handleStudentSelect(1)}>
            <td>Martin Van Buren</td>
            <td>11</td>
            <td>0211</td>
            <td>Niceville High</td>
            <td>10 Aug 2021</td>
          </tr>
          <tr>
            <td>Tester</td>
            <td>11</td>
            <td>0211</td>
            <td>Niceville High</td>
            <td>10 Aug 2021</td>
          </tr>
          <tr>
            <td>John Tyler</td>
            <td>11</td>
            <td>0211</td>
            <td>Niceville High</td>
            <td>10 Aug 2021</td>
          </tr>
          <tr>
            <td>Dwight Wagner</td>
            <td>11</td>
            <td>0211</td>
            <td>Niceville High</td>
            <td>10 Aug 2021</td>
          </tr>
          <tr>
            <td>Patti Carroll</td>
            <td>11</td>
            <td>0211</td>
            <td>Niceville High</td>
            <td>10 Aug 2021</td>
          </tr>
          <tr>
            <td>Stanley Ross</td>
            <td>11</td>
            <td>0211</td>
            <td>Niceville High</td>
            <td>10 Aug 2021</td>
          </tr>
          <tr>
            <td>Willie Allen</td>
            <td>11</td>
            <td>0211</td>
            <td>Niceville High</td>
            <td>10 Aug 2021</td>
          </tr>
          <tr>
            <td>Leonard White</td>
            <td>11</td>
            <td>0211</td>
            <td>Niceville High</td>
            <td>10 Aug 2021</td>
          </tr>
          
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li key='1' className='page-item active'>
            <a href='#!' className="page-link">1</a>
          </li>
          <li key='2' className='page-item'>
            <a href='#!' className="page-link">2</a>
          </li>
          <li key='3' className='page-item'>
            <a href='#!' className="page-link">3</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default StudentList