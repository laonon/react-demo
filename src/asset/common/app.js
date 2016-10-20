import React , { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'
import routes from 'common/routes'
import Header from 'common/header'
import Footer from 'common/footer'

// 引入主体样式文件
import 'common/main.less'

// 配置导航
export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {}

  render () {
    return (<div className='layout-wrapper'>
              <Header/>
              <div id='main'>
                {this.props.children}
              </div>
            </div>)
  }
}
