import {put,take,call,fork,takeEvery,select} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import  * as api  from '../api'
import * as actionTypes from '../actions/'

// saga worker 监听FETCH_POETRY_REQUEST动作触发执行相应操作
function* fetchPoetrySaga(){
    // yield delay(100)
    // ======== 写法一 ========= 
    // yield takeEvery(actionTypes.FETCH_POETRY_REQUEST,function*(action){
    //     // 调用this.props.fetchPoetryRequest({user:'poetries',age:23}) 传参进来这里
    //     // 也可以通过这样获取state中的参数 const state = yield select()
    //     const {user,age} = action
    //     try{
    //         const data =  yield call(api.get({
    //             url:'/mock/5b7fd63f719c7b7241f4e2fa/tangshi/tang-shi'
    //         }))
    //         yield put(actionTypes.fetchPoetrySuccess({data:data.data.data}))
    //     }catch(error){
    //         yield put(actionTypes.fetchPoetryFauilure({errMsg:error.message}))
    //     }
     
    // })
    // === 写法二====
  while(true){
      // 当dispatch({type:FETCH_POETRY_REQUEST})的时候被这里监听 执行对应的请求
    const {payload:{user,age}} =  yield take(actionTypes.FETCH_POETRY_REQUEST)
    console.log(user,age)
    try{
         const data =  yield call(api.get({
             url:'/mock/5b7fd63f719c7b7241f4e2fa/tangshi/tang-shi'
         }))
          yield put(actionTypes.fetchPoetrySuccess({data:data.data.data}))
     }catch(error){
         yield put(actionTypes.fetchPoetryFauilure({errMsg:error.message}))
     }
  }

} 


// 导出所有的saga
export default  [
    fork(fetchPoetrySaga)
]