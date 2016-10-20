/**
 * @file: 基本信息
 * @author: wangming@lianjia.com
 */
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'

import { Menu, Icon, Row, Col, Select } from 'antd'
import * as Actions from './../../actions/index'
import './style.less'

export default class Content extends Component {

  componentWillMount () {
    let me = this
    this.setState({
      showType: 0,
      showTypes: [{
        id: 0,
        type: '全部'
      }],
      tip: {}
    })
  }

  componentWillReceiveProps () {}

  getTpl () {}

  render () {
    return (
      <div className='layout-right'>
        <div className='right-box'>
          <div className='filter-box'>
            <div className='filter'>
              <Row>
                <Col span={6}>
                <lable className='tit'>
                  显示类型
                </lable>
                <Select
                  placeholder='全部'
                  value={this.state.showType}
                  field='showType'
                  reactObj={this}
                  onSelect={this.changeSelect}>
                  <Select.Option key={0} value={0}>
                    全部
                  </Select.Option>
                </Select>
                </Col>
                <Col span={6}></Col>
                <Col span={8}></Col>
              </Row>
            </div>
            <div className='result'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
