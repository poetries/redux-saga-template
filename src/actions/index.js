import { createAction } from 'redux-actions';

export const COMMON_FETCHING = 'COMMON_FETCHING'
export const COMMON_OVER = 'COMMON_OVER'
export const MSG_SHOW = 'MSG_SHOW'
export const MSG_INIT = 'MSG_INIT'
export const POP_LOGIN = 'POP_LOGIN'
export const initMsg = () => ({type : MSG_INIT})


// 相比用thunk多了一步 多了个action 来触发saga woker
export const FETCH_POETRY_REQUEST = 'FETCH_POETRY_REQUEST'
export const FETCH_POETRY_SUCCESS = 'FETCH_POETRY_SUCCESS'
export const FETCH_POETRY_FAILURE = 'FETCH_POETRY_FAILURE'
export const fetchPoetryRequest = createAction(FETCH_POETRY_REQUEST)
export const fetchPoetrySuccess = createAction(FETCH_POETRY_SUCCESS)
export const fetchPoetryFauilure= createAction(FETCH_POETRY_FAILURE)
