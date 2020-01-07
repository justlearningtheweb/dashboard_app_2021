import React from 'react'
import {Bar} from 'react-chartjs-2'

function BarChart(props) {
  let age = props.user.map(function (value) {
    return value.dob.age
  })
  let name = props.user.map(function (value) {
    return value.name.first
  })
  let data = {
    labels: name,
    datasets: [
      {
        label: 'Age',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: age
      }
    ]
  }
  return (
    <div>
      <Bar data={data} />
    </div>
  )
}

export default BarChart