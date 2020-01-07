import React from 'react'
import { Pie} from 'react-chartjs-2'

function PieChart(props) {
  let femaleArray = props.user.filter(function (value) {
    console.log(value.gender)
    if (value.gender === 'female') {
      return value
    }
  })
  let maleArray = props.user.filter(function (value) {
    if (value.gender === 'male') {
      return value
    }
  })
  let data = {
    labels: ['female', 'male'],
    datasets: [
      {
        backgroundColor: ['rgba(255,99,132,0.2)', 'lightgrey'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'lightblue',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [femaleArray.length, maleArray.length]
      }
    ]
  }
  return (
    <div>
      <p>Gender Avg</p>
      <Pie data={data} />
    </div>
  )
}

export default PieChart