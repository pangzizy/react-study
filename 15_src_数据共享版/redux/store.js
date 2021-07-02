import { createStore, applyMiddleware, combineReducers } from 'redux'

import countReducer from './reducers/count_reducer'

import personReducer from './reducers/person_reducer'

// 引入redux-thunk ，用于支持异步action
import thunk from 'redux-thunk'

const allReducers = combineReducers({
    count:countReducer,
    person:personReducer
})

export default createStore(allReducers, applyMiddleware(thunk))