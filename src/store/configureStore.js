import { createStore, applyMiddleware, compose } from 'redux'
// import {createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux'
import rootSaga from '../sagas'
import rootReducer from '../reducers/'

export const history = createHistory()

const middleware = routerMiddleware(history)

//创建saga middleware
const sagaMiddleware = createSagaMiddleware();


const configureStore = preloadedState => {
	// 安装 Redux-DevTools Chrome 插件后可用 composeEnhancers()
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

	const store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(
			applyMiddleware(sagaMiddleware,middleware)
		)
	)
	sagaMiddleware.run(rootSaga);
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}


export default configureStore
