import React from 'react'
import './dashboard.scss'

function Dashboard() {
  return (
    <section className="dashboard_container">
      <div className="dashboard_item1">
        <div>
           <p>Box 1</p>
        </div>
        <div>
           <p>Box 2</p>
        </div>
      </div>
      <div className="dashboard_item2">
        <p>Box 3</p>
      </div>
    </section>
  )
}

export default Dashboard