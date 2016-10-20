import React from 'react'
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'

// 配置路由
import App from 'common/app'
import MapPub from 'pages/dataMap/listPub/index.js'
import MapPrivate from 'pages/dataMap/listPrivate/index.js'
import MapDetail from 'pages/dataMap/detail/index.js'
import MapAdd from 'pages/dataMap/add/index.js'
import MapImport from 'pages/dataMap/import/index.js'
import MapEdit from 'pages/dataMap/edit/index.js'

module.exports = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute path='/MapPub' component={MapPub} />
      <Route path='/MapPub' component={MapPub} />
      <Route path='/MapPrivate' component={MapPrivate} />
      <Route path='/MapDetail' component={MapDetail} />
      <Route path='/MapAdd' component={MapAdd} />
      <Route path='/MapImport' component={MapImport} />
      <Route path='/MapEdit' component={MapEdit} />
    </Route>
  </Router>
)
