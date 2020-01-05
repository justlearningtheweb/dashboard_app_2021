import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard'

const routes = (
  <Switch>
    <Route path="/" component={Dashboard}></Route>
  </Switch>
)

export default routes