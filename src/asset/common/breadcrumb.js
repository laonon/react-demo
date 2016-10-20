import React , { Component } from 'react'

const conf = [
  {
    path: '/datamap/list',
    name: '链家数据',
    code: 'human',
    children: [
      {
        path: '/org/search',
        name: '组织',
        code: 'org',
        children: [
          {
            path: '/org/search',
            name: '组织',
            code: 'orgSearch',
            leaf: [
              {
                path: '/org/add',
                name: '新增组织',
                code: 'orgAdd'
              },
              {
                path: '/org/detail',
                name: '组织详情',
                code: 'orgDetail'
              },
              {
                path: '/org/update',
                name: '编辑组织',
                code: 'orgMod'
              }
            ]
          },
          {
            path: '/department/search',
            name: '部门',
            code: 'depSearch',
            leaf: [
              {
                path: '/department/add',
                name: '新增部门',
                code: 'depAdd'
              },
              {
                path: '/department/detail',
                name: '部门详情',
                code: 'depDetail'
              },
              {
                path: '/department/update',
                name: '编辑部门',
                code: 'depMod'
              }
            ]
          },
          {
            path: '/job/search',
            name: '职务',
            code: 'job',
            children: [
              {
                path: '',
                name: '职务',
                code: 'jobSearch',
                leaf: [{
                  path: '/job/add',
                  name: '新增职务',
                  code: 'jobAdd'
                }, {
                  path: '/job/detail',
                  name: '职务详情',
                  code: 'jobDetail'
                }, {
                  path: '/job/update',
                  name: '编辑职务',
                  code: 'jobUpdate'
                }]
              }
            ]
          },
          {
            path: '/position/search',
            name: '职位',
            code: 'position',
            children: [
              {
                path: '',
                name: '职位',
                code: 'positionSearch',
                leaf: [{
                  path: '/position/add',
                  name: '新增职位',
                  code: 'positionAdd'
                }, {
                  path: '/position/batch',
                  name: '批量新增',
                  code: 'positionBatch'
                }, {
                  path: '/position/detail',
                  name: '职位详情',
                  code: 'positionDetail'
                }, {
                  path: '/position/update',
                  name: '编辑职位',
                  code: 'positionUpdate'
                }]
              }
            ]
          }
        ]
      }
    ]
  }
] 

export default class footer extends Component {

import { Menu, Icon, Breadcrumb } from 'antd'
	
	static defaultProps = {
    currentMenu: ['human', 'org']
  }

  static propTypes = {
    isBread: PropTypes.bool,
    currentMenu: PropTypes.array
  }

  /**
   * 退出
   */
  getOut() {

  }

  /**
   * 获得子menu
   * @return {Array} 子菜单
   */
  getSubMenu() {
    var currentMenuCode = this.props.currentMenu[0] || 'human'
    for (let item of Menu.conf) {
      if (item.code === currentMenuCode) {
        return item.children
      }
    }
  }

  /**
   * 获得面包屑
   * @return {Array} 面包屑
   */
  getBreadList () {
    let me = this
    let bread = []
    if (this.props.isBread) {
      let loop = (menus) => {
        menus.map((item) => {
          if ($.inArray(item.code, me.props.currentMenu) > -1) {
            bread.push(item)
          }

          if (bread.length == me.props.currentMenu.length) {
            return;
          }

          if (item.children) {
            loop(item.children)
          }

          if (item.leaf) {
            loop(item.leaf)
          }
        })
      }
      loop(Menu.conf)
    }
    return bread
  }

  componentWillMount() {
    this.setState({
      menuList: Menu.conf,
      subMenuList: this.getSubMenu() || [],
      breadList: this.getBreadList() || [],
      userInfo: window.userInfo || {}
    })
  }

  render () {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>
          链家数据
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          数据地图
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          列表
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
