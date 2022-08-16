import React, {useState} from 'react'
import Input from '../common/input'
import SearchBox from '../common/searchBox'
import StudentList from './studentList'

const contactTime = () => {
  const d = new Date()
  const datetime =  d.getFullYear() + '-' + 
                    (d.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                    d.getDate().toString().padStart(2, '0') + 'T' + 
                    d.getHours().toString().padStart(2, '0') + ':' +
                    d.getMinutes().toString().padStart(2, '0')
  console.log('dt: ', datetime)
  return datetime
}
const initialTime = contactTime()

const CommunicationLog = (props) => {
  const initialFormValues = {
    submitterName: props.name,
    contactName: '',
    contactType: '',
    contactMeans: '',
    contactTime: initialTime,
    contactReason: '',
    note: '',
    cancel: false
  }

  const [values, setValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit: ', e.target.name)
  }

  const handleLogSelect = (uuid) => {
    console.log('handleLogSelect: ', handleLogSelect)
  }

  if(values.cancel){
    return <StudentList />
  }

  return(
    <div className="container pt-3">
      <div className="row align-items-top" style={{minHeight: "60vh"}}>
        
        <div className='col-sm-8'>
          <SearchBox />
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Contact</th>
                <th>Employee</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Note</th>
              </tr>
            </thead>

            <tbody>
              <tr onClick={() => handleLogSelect(1)}>
                <td>John Buren</td>
                <td>Fusco</td>
                <td>Academics</td>
                <td>03Apr21</td>
                <td>Emailed student and parent with detailed...</td>
              </tr>
              <tr>
                <td>John Buren</td>
                <td>Fusco</td>
                <td>Attendance</td>
                <td>03Oct21</td>
                <td>Attendance Policy 5-Day Letter</td>     
              </tr>
              <tr>
                <td>John Buren</td>
                <td>Fusco</td>
                <td>Academics</td>
                <td>27Nov21</td>
                <td>Exemplary Civil War paper presented to class</td>            
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
            </ul>
          </nav>
        </div>


        <div className="col col-sm-4 card my-3 bg-light">
          <form onSubmit={handleSubmit} className='card-body'>
            <h4>Add Communication Log</h4>
            <Input
              id="submitterName"
              name='submitterName'
              type="text"
              label="Employee Name"
              error=""
              placeholder='employee name'
              value={values.submitterName}
              onChange={handleChange}
            />

            <div className='form-floating mb-3'>
              <select 
                id='contactType'
                name='contactType'
                className='form-select'
                value={values.contactType}
                onChange={handleChange}
              >
                <option selected key='e' value='e'>Outgoing</option>
                <option key='f' value='f'>Incoming</option>
              </select>
              <label htmlFor='contactType' className='form-label'>Contact Type</label>
            </div>

            <div className='form-floating mb-3'>
              <select 
                id='contactMeans' 
                name='contactMeans'
                className='form-select'
                value={values.contactMeans}
                onChange={handleChange}
              >
                <option selected key='g' value='g'>Phone Call</option>
                <option key='h' value='h'>Email</option>
                <option key='i' value='i'>Mail (Postal)</option>
                <option key='j' value='j'>In Person</option>
                <option key='k' value='k'>Other</option>
              </select>
              <label htmlFor='contactMeans' className='form-label'>Means of Contact</label>
            </div>

            <div className='form-floating mb-3'>
              <input 
                type='datetime-local' 
                name='contactTime'
                id='contactTime' 
                min='2021-07-25T00:00' 
                max='2023-07-25T00:00'
                className='form-control'
                value={values.contactTime}
                onChange={handleChange}
              />
              <label htmlFor='contactTime' className='form-label'>Date and Time of Contact</label>
            </div>

            <div className='form-floating mb-3'>
              <select 
                id='contactReason' 
                name='contactReason'
                className='form-select'
                value={values.contactReason}
                onChange={handleChange}
              >
                <option key='a' value='a'>Attendance</option>
                <option key='b' value='b'>Discipline</option>
                <option selected key='c' value='c'>Academics</option>
                <option key='d' value='d'>Other</option>
              </select>
              <label htmlFor='contactReason' className='form-label'>Reason for Contact</label>
            </div>


            <Input 
              id="contactName"
              name='contactName'
              type="text"
              label="Contact Name"
              error=""
              value={values.contactName}
              onChange={handleChange}
            />
            

            <div className='form-floating mb-4'>
              <textarea 
                id='note'
                name='note'
                className='form-control'
                maxLength='500'
                style={{height: '100px'}}
                value={values.note}
                onChange={handleChange}
              >
              </textarea>
              <label htmlFor='note' className='form-label'>Note</label>
              <span className='form-text'>Characters Remaining: {500 - values.note.length}</span>
            </div>

            <div className='d-grid gap-2 d-md-flex justify-content-md-between'>
              <button 
                type='button' 
                className="btn btn-primary px-4"
                name='save'
                onClick={handleSubmit}
              >Save
              </button>
              <button 
                type='button' 
                className='btn btn-outline-danger'
                name='cancel'
                onClick={handleSubmit}
              >Cancel
              </button>
            </div>

          </form>    
        </div>
      </div>
    </div>
  )
}
export default CommunicationLog
