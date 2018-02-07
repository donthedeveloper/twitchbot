import {combineReducers} from 'redux';
import {messages} from './App/Chat/reducer.jsx';

const reducers = combineReducer({
    messages
});

export default reducers;