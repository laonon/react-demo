/**
 * @file: reducer
 * @author: wangming@lianjia.cn
 */

import * as types from './../actions/index'

// 初始值
export let initState = {
  detail: {

  }
}

export let reducer = (state = initState , action) => {
  switch (action.type) {
    case types.CHANGE_DETAIL_PROPS:
      return {
        hasSubmit: state.hasSubmit,
        detail: $.extend(true, {}, action.detail)
      }
    default:
      return state
  }
}
