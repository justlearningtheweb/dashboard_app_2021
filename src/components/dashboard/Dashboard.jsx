import React from 'react'
import './dashboard.scss'
import { Doughnut, Bar } from 'react-chartjs-2'
import rawData from '../../rawData.json'

function Dashboard() {
  const data = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ['red', 'green', 'yellow'],
      hoverBackgroundColor: 'lightblue'
    }]
  }
  const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <section className="dashboard_container">
      <div className="dashboard_item1">
        <div>
          <Doughnut data={data}  options={{maintainAspectRatio: false}} />
        </div>
        <div>
          <Doughnut data={data}  options={{maintainAspectRatio: false}} />
        </div>
      </div>
      <div className="dashboard_item2">
        <Bar data={data2}  options={{maintainAspectRatio: false}} />
      </div>
    </section>
  )
}

export default Dashboard