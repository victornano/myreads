import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
// Import your global styles here
import 'normalize.css/normalize.css'; // eslint-disable-line import/first
import './index.scss'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
