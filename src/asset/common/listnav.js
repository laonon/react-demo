import React , { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { Menu, Modal } from 'antd'

export default class listnav extends Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {}

  render () {
    const {current} = this.props

    return (
      <Menu mode='horizontal' defaultSelectedKeys={current}>
        <Menu.Item key='1'>
          <Link to='MapPub'> 共享数据
          </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='MapPrivate'> 私有数据
          </Link>
        </Menu.Item>
        <Menu.Item key='3' disabled={true}>
          申请反馈
        </Menu.Item>
        <Menu.Item key='4' disabled={true}>
          权限审核
        </Menu.Item>
      </Menu>
    )
  }
}
