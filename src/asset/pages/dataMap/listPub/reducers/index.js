/**
 * @file: reducer
 * @author: wangming@lianjia.cn
 */

import * as types from './../actions/index'

// 初始值
export let initState = {
  listObj: {
    dataList: [],
    totalCount: 0
  },
  filter: {
    page: 1,
    max_pre_page: 20,
    db_id: -1,
    prod_id: -1
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
