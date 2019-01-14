import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Welcome(props){
  return <span className="card-title">Welcome back!</span>
}

function Sign(props){
  return <span className="card-title">Please, sign in</span>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Welcome />;
  }
  return <Sign />;
}

function LoginButton(props){
  return(
    <button className="waves-effect waves-light btn blue darken-4 z-depth-3" onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props){
  return(
    <button className="waves-effect waves-light btn blue darken-4 z-depth-3" onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControll extends React.Component{
  constructor(props){
    super(props)
    this.handleLoggedIn = this.handleLoggedIn.bind(this)
    this.handleLoggedOut = this.handleLoggedOut.bind(this)
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoggedIn(){
    this.setState({
      isLoggedIn: true
    })
  }

  handleLoggedOut(){
    this.setState({
      isLoggedIn: false
    })
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn
    let button

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLoggedOut}></LogoutButton>
    }else{
      button = <LoginButton onClick={this.handleLoggedIn}></LoginButton>
    }
    return(
      <div className="card blue darken-1 z-depth-5">
        <div className="card-content white-text">
          <Greeting isLoggedIn={isLoggedIn}/>
          {button}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <LoginControll/>,
  document.getElementById('root')
)