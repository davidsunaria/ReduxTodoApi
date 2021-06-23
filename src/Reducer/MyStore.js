import { createStore, combineReducers, applyMiddleware } from 'redux';
import TodoReducer from './TodoReducer';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers({
    todoReducer: TodoReducer
})

export default createStore(combinedReducers, applyMiddleware(thunk))
