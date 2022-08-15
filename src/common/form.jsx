import React, {Component} from 'react'
import Input from './input'
import Select from './select'

class Form extends Component {
  state = {
    data: {},
    errors: {}
  }

  handleSubmit = e => {
    e.preventDefault()
    this.doSubmit()
  }

  //handleChange = e => {
  //  const data = {...this.state.data}
  //  data[e.currentTarget.name] = e.currentTarget.value
  //  this.setState({data})
  //}

  // Destructured e in handleChange event and renamed to input
  handleChange = ({currentTarget: input}) => {
    const errors = {...this.state.errors}
    const data = {...this.state.data}
    
    data[input.name] = input.value
    this.setState({data, errors})
  }

  renderButton(label){
    return(
      <button 
        disabled={false}
        className="btn btn-primary"
      >
        {label}
      </button>
    )
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state

    return(
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    )
  }

  renderInput(name, label, type = 'text') {
    const {data, errors} = this.state

    return (
      <Input 
        name={name}
        label={label}
        type={type}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    )
  }

}
export default Form