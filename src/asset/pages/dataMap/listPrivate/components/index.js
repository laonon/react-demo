/**
 * @file: 列表-共享数据
 * @author: wangming@lianjia.com
 */

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal, Menu } from 'antd'
import * as Actions from './../actions/index'
import Navbar from './navbar/'
import Content from './content/'
import ListNav from 'common/listnav'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      current: ['2']
    }
  }

  componentWillMount () {}

  /**
   * 校验
   */
  setValidate () {}

  /**
   * 添加黑名单
   */
  addBlacklist () {
    let me = this
  }

  render () {
    const {detail, actions, hasSubmit} = this.props

    let tpl = [
      <Navbar ref='navbar' key='navbar' />,
      <Content ref='content' key='content' detail={detail} />
    ]

    return (
      <div className='layout-content'>
        <ListNav current={['2']} />
        <div className='layout-container clearfix' id='page'>
          {tpl}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    hasSubmit: state.hasSubmit,
    detail: state.detail
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)(App)
