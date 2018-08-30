import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'

const rootReducer = combineReducers({
      routing,
      poetry 				: require('./poetry').default
})

export default rootReducer