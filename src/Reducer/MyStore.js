import { createStore, combineReducers } from 'redux';
import TodoReducer from './TodoReducer';

const combinedReducers = combineReducers({
    todoReducer: TodoReducer
})


export default createStore(combinedReducers)