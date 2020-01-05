import React from 'react'
import './dashboard.scss'

class Dashboard extends React.Component {

  componentDidMount() {
    console.log('on mount')
    fetch('http://localhost:4000/get_user')
    .then(function (response) {
      console.log(response)
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
}

export default Dashboard