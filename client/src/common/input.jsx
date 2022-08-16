import React from 'react'

const Input = ({name, label, error, ...rest}) => {  //destructured (props)
  return( 
    <div className='form-floating mb-3'>
      <input name={name} id={name} {...rest} className='form-control' />
      <label htmlFor={name} className=''>{ label }</label>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}
export default Input