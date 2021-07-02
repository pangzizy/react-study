import { createStore, applyMiddleware } from 'redux'

// 引入redux-thunk ，用于支持异步action
import thunk from 'redux-thunk'

// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

// 引入汇总的reducers
import reducer from './reducers/index'

// applyMiddleware(thunk)
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))