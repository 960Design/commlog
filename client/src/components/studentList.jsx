import React, {useState, useEffect} from 'react'
import { useMsal } from '@azure/msal-react'
import { requestToken } from '../services/tokenRequest'
import SearchBox from '../common/searchBox'
import CommunicationLog from './communicationLog'

function StudentList(){
  const { instance, accounts } = useMsal();
  const [token, setToken] = useState(null)
  const [schools, setSchools] = useState([])
  const [student, setStudent] = useState(null)
  
  /*
  const getToken = async () => {
    if (sessionStorage.getItem('token')) {
      setToken(sessionStorage.getItem('token'))
    }else{
      setToken(await requestToken())
    }
  }
  */
  
  const getToken = async () => {
    setToken(await requestToken())
  }
  useEffect(() => {
    getToken()
  }, [])

  if(!sessionStorage.getItem('token')) {return <div>Loading...</div>}

  // if bearer token is available send request to focus API
  if(token){
    // get user uuid from token username (school district email)
    // maybe should do on server side?
    


    const schoolsUrl = "focus/api/1.0/schools"

    let headers = new Headers()
    headers.append("Authorization", "Bearer " + token)
    let requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    }
    /*
    fetch(schoolsUrl, requestOptions)
      .then(response => response.text())
      //.then(result => console.log('schoolResult: ', result))
      .then(result => setSchools(result))
      .catch(error => console.log('error', error));

    //let response = await fetch(schoolsUrl, requestOptions)
    //let result = await response.json()
    */

  }
  
  const bearer = "Bearer " + token
  console.log('bearer: ', bearer)
  console.log('schools: ', schools)

  // if bearer token is available send request to focus API


  

  //const schools = fetch(schoolsUrl, requestOptions)
  

  
  console.log('accounts: ', accounts)
  console.log('token: ', token)
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
            <td>William Henry Harrison</td>
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