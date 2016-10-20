/**
 * @file: actions
 * @auth: wangming@lianjia.com
 */

export const CHANGE_DETAIL_PROPS = 'CHANGE_DETAIL_PROPS' // detail更新

/**
 * 获得 某个组织的详情
 * @param  {object} detail
 * @return {object}
 */
export function getDetailSync (jobId) {
  return dispatch => {
    Ajax.send(
      'job/detail.json', {jobId: jobId}, 'GET'
    ).done(
      function (res) {
        dispatch(getDetail(res))
      }
    )
  }
}

/**
 * 获得 某个组织的详情
 * @param  {object} detail
 * @return {object}
 */
export function getDetail (res) {
  return {
    type: types.GET_DETAIL_PROPS,
    res: res,
    detail: res.data || {}
  }
}
