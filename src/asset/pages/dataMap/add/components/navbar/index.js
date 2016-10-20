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
          <SubMenu key='sub1' title={<span><Icon type="bars" /><span>全部业务线</span></span>}>
            <Menu.Item key='1'>
              <Link to='/'> 二手房
              </Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/'> 新房
              </Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/'> 经纪人产品
              </Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Link to='/'> 市场
              </Link>
            </Menu.Item>
            <Menu.Item key='5'>
              <Link to='/'> 品质管理
              </Link>
            </Menu.Item>
            <Menu.Item key='6'>
              <Link to='/'> 城市运营
              </Link>
            </Menu.Item>
            <Menu.Item key='7'>
              <Link to='/'> 业务运营
              </Link>
            </Menu.Item>
            <Menu.Item key='8'>
              <Link to='/'> 其它
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
    )
  }
}
