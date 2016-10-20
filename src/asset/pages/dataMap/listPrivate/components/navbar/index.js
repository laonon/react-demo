/**
 * @file: 基本信息
 * @author: wangming@lianjia.com
 */
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'

import { Menu, Icon } from 'antd'
import * as Actions from './../../actions/index'
import './style.less'

const SubMenu = Menu.SubMenu

export default class Navbar extends Component {

  componentWillMount () {
    let me = this
    this.setState({
      tip: {}
    })
  }

  componentWillReceiveProps () {}

  render () {
    return (
      <aside className='layout-sider'>
        <Menu
          onClick={this.handleClick}
          style={{ width: 200 }}
          defaultOpenKeys={['sub1', 'sub2']}
          defaultSelectedKeys={[this.state.current]}
          mode='inline'>
          <SubMenu key='sub1' title={<span><Icon type="bars" /><span>全部</span></span>}>
            <Menu.Item key='1'>
              临时表
            </Menu.Item>
            <Menu.Item key='2'>
              私有表
            </Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
    )
  }
}
