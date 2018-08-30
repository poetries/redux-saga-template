import * as ActionTypes from '../actions'

export default (state = {
	fetching:false,
	error:false,
	errMsg:'',
	data:[]
},action) => {
	if(action.type === ActionTypes.FETCH_POETRY_REQUEST){
		return Object.assign({...state,fetching:true,errMsg:''})
	}else if(action.type === ActionTypes.FETCH_POETRY_SUCCESS){
		const data = action.payload.data
		return Object.assign({...state,fetching:false,data,errMsg:''})
	}else if(action.type === ActionTypes.FETCH_POETRY_FAILURE){
		return Object.assign({...state,fetching:false,error:true,errMsg:action.payload.errMsg})
	}
	return state
}

