import "regenerator-runtime/runtime"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import 'antd/dist/antd.css'

const render = () => ReactDOM.render(
  <App />, 
  document.getElementById('Microcosmos')
)

if (document.readyState === 'loading') {

  document.addEventListener(
    'DOMContentLoaded', 
    render
  )

} else {

  render();
}
