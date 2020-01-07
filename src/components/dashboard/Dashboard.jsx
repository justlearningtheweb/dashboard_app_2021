import React from 'react'
import './dashboard.scss'
import BarChart from '../chart/BarChart'
import PieChart from '../chart/PieChart'

class Dashboard extends React.Component {
  state = {
    user: [],
    ageGroup: null
  }

  componentDidMount() {
    fetch('http://localhost:4000/user/load_user')
    fetch('http://localhost:4000/user/get_user')
    .then(function (response) {
      return response.json()
    })
    .then((response) => {
      this.setState({
        user: response
      })
    })
    .catch(function (err) {
      console.error('Danger!' + err)
    })
  }
  render() {
    return (
      <section className="dashboard_container">
        <div className="dashboard_item1">
          <div>
            <BarChart user={this.state.user} />
          </div>
          <div>
            <PieChart user={this.state.user} />
          </div>
        </div>
        <div className="dashboard_item2">
          <p>Box 3</p>
        </div>
      </section>
    )
  }
}

export default Dashboard