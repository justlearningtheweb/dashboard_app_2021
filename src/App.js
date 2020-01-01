import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes/routes'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div style={{ border: '2px solid red', display: 'flex' }}>
          <Sidebar />
          {routes}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App