import React , { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, Redirect, IndexLink } from 'react-router'
import { Menu, Icon, Breadcrumb } from 'antd'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class header extends Component {

  constructor (props) {
    super(props)
    this.state = {
      current: 'pub'
    }
  }

  componentDidMount () {
    this.getUser()
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }

  getUser = () => {
    this.setState({
      current: 'pub',
      username: 'wangming'
    })
  }

  render () {
    const {current} = this.props

    return (
      <div className='layout-header'>
        <div className='top-bar clearfix'>
          <h1 className='logo'><img src='src/images/logo.png' width='50'/>链家数据管理平台</h1>
          <div className='global-nav'>
            <Menu
              theme='dark'
              onClick={this.handleClick}
              defaultOpenKeys={['pub']}
              defaultSelectedKeys={[this.state.current]}
              mode='horizontal'>
              <SubMenu title={<span>数据地图</span>}>
                <Menu.Item key='pub'>
                  <Link to='MapPub'> 列表页
                  </Link>
                </Menu.Item>
                <Menu.Item key='add'>
                  <Link to='MapAdd'> 创建页
                  </Link>
                </Menu.Item>
                <Menu.Item key='edit'>
                  <Link to='MapEdit'> 编辑页
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key='dataQuery' disabled={true}>
                <Link to=''> 数据查询
                </Link>
              </Menu.Item>
              <Menu.Item key='dataTask' disabled={true}>
                <Link to=''> 数据查询
                </Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className='user-info'>
            <Menu mode='horizontal' theme='dark'>
              <SubMenu title={<span><Icon type="user" />{this.state.username}</span>}>
                <Menu.Item key='setting:1'>
                  退出
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
        <div className='breadcrumb'>
          <span>当前位置：</span>
          <Breadcrumb>
            <Breadcrumb.Item>
              首页
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              数据地图
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              列表
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    )
  }
}
