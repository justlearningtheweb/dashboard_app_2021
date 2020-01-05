import React from 'react'
import './sidebar.scss'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { setUserToStateAction } from '../../redux/rootReducer'
import { Link } from 'react-router-dom'

function Sidebar(props) {
  return (
    <aside className="sidebar_container">
      <ul className="sidebar_items">
        <Link to="/">
          Home
        </Link>
        <Link to="/message">
          Message
        </Link>
        <Link to="/user">
          User
        </Link>
        <Link to="/report">
          Report
        </Link>
        <Link to="/setting">
          Setting
        </Link>
      </ul>
    </aside>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {setUserToStateAction})(withRouter(Sidebar))