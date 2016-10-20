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

export default class Content extends Component {

  componentWillMount () {
    let me = this
    this.setState({
      tip: {}
    })
  }

  componentWillReceiveProps () {}

  render () {
    return (
      <div className='layout-right'>
        <div className='right-box'>
          列表页-私有数据
        </div>
      </div>
    )
  }
}
