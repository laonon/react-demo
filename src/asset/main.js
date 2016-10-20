/**
 * 
 * @authors wangming@lianjia.com
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'
import routes from 'common/routes'

render((
  <Router routes={routes} history={hashHistory} />
  ), document.getElementById('app'))
