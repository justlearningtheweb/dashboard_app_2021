import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes/routes'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="app_main_container">
            <Sidebar />
            {routes}
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App