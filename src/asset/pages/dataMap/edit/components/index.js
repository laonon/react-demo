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

class App extends Component {

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
        <div className='layout-container clearfix' id='page'>
          编辑页-待开发
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
