import React from 'react'
import './sidebar.scss'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { setUserToStateAction } from '../../redux/rootReducer'

function Sidebar(props) {
  let regionList = ['---', 'AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US']
  let renderRegionListTemplate = []
console.log({props})
  for (let i = 0; i < regionList.length; i++) {
    renderRegionListTemplate.push(
      <option key={regionList[i]} value={regionList[i]}>{regionList[i]}</option>
    )
  }

  function handleFetchUserByRegion(payload) {
    console.log('fire')
    if (payload !== '---') {
      fetch(`https://randomuser.me/api/?nat=${payload}&results=5`)
      .then(function (response) {
        return response.json()
      })
      .then(function (response) {
        console.log({response})
        props.setUserToStateAction(response.results)
      })
      .catch(function (err) {
        console.error('Danger there is error' + err)
      })
    }
    return null
  }
  return (
    <aside className="sidebar_container">
      <p>Sidebar Component</p>
      <div className="sidebar_items">

        <div>
          <p>filters</p>
          <input type="text"/>
        </div>

        <div>
          <p>Region</p>
          <select style={{width: '100%'}} onChange={handleFetchUserByRegion}>
            {renderRegionListTemplate}
          </select>
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
    </aside>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {setUserToStateAction})(withRouter(Sidebar))