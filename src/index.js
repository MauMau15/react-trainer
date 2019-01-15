import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LoginForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    console.log('userName: '+ this.state.userName)
    console.log('password: '+ this.state.password)
    event.preventDefault();
  }

  render(){
    return(
      <div className="card-panel hoverable login green lighten-5 white-text z-depth-5">
        <form className="row" onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            <input type="text" className="validate" name="userName" value={this.state.userName} onChange={this.handleChange}></input>
            <label>User Name</label>
          </div>
          <div className="input-field col s12">
            <input type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange}></input>
            <label>Password</label>
          </div>
          <input className="btn waves-effect waves-light z-depth-4" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
ReactDOM.render(
  <LoginForm/>,
  document.getElementById('root')
)
