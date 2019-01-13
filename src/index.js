import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Welcome = (props) => {
  return <li className="collection-item">Hello {props.name}</li>
}

const App = () => {
  return (
    <div className="container">
      <ul class="collection">
        <Welcome name="Mauricio Renero"/>
        <Welcome name="Claudia Quintana"/>
      </ul>
    </div>
  )
}

const element = <App></App>

ReactDOM.render(
  element,
  document.getElementById('root')
)