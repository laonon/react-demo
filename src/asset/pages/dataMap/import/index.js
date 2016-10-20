/**
 * @authors wangming@lianjia.com
 * @description 数据地图-详情页
 */

import React from 'react'
import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import App from './components/'
import * as Reducer from './reducers/'

let buildStore = compose(applyMiddleware(thunk))(createStore)
let store = buildStore(Reducer.reducer, Reducer.initState)

export default class Page extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {<App />}
      </Provider>
    )
  }
}

ReactDOM.render(<Page />, document.getElementById('app'))
