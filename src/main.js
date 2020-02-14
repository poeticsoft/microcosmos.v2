import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import App from './app/app'

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
