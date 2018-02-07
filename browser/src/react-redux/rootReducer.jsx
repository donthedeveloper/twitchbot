import {combineReducers} from 'redux';
import {messages} from './App/Chat/reducer.jsx';

const reducers = combineReducers({
    messages
});

export default reducers;