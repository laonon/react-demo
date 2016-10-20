/**
 * @authors wangming@lianjia.com
 * @description 数据查询
 */

import React , { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'
import { Menu, Icon, Switch, Breadcrumb } from 'antd'

const SubMenu = Menu.SubMenu

// 引入单个页面（包括嵌套的子页面）
import myTable from 'common/table.js'
import myForm from 'common/form.js'
import myChart from 'common/chart.js'
import myAnimate from 'common/animate.js'
import myCalendar from 'common/calendar.js'
import myCard from 'common/fetch.js'

const ACTIVE = { color: 'red' }

// 配置导航
export default class DataQuery extends Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {}

  render () {
    return (<div>
              <p>
                数据查询，暂未开发
              </p>
            </div>)
  }
}
