import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // This is a component which executes the same thing twice on develop
  // It will not interfeer 
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
