import React from 'react'
import './sidebar.scss'

function Sidebar() {
  return (
    <div className="sidebar_container">
      <p>Sidebar Component</p>
      <div className="sidebar_items">
  
        <div>
          <p>filters</p>
          <input type="text"/>
        </div>

        <div>
          <p>Region</p>
          <p>placeholder text</p>
        </div>

          
        <div>
          <p>Region</p>
          <p>placeholder text</p>
        </div>

          
        <div>
          <p>Region</p>
          <p>placeholder text</p>
        </div>

          
        <div>
          <p>Region</p>
          <p>placeholder text</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar