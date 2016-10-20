/**
 * @authors wangming@lianjia.com
 * @description 数据任务
 */

import React , { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'
import { Menu, Icon, Switch, Breadcrumb } from 'antd'

const SubMenu = Menu.SubMenu

// 配置导航
export default class DataTask extends Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {}

  render () {
    return (<div>
              <p>
                数据任务，暂未开发
              </p>
            </div>)
  }
}
