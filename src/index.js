import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Welcome = (props) => {
  return <h1>Hello {props.name}</h1>
}

const element = <Welcome name="Mauricio Renero"></Welcome>

ReactDOM.render(
  element,
  document.getElementById('root')
)