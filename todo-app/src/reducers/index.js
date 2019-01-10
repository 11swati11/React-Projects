import { combineReducers } from 'redux';
import todos from './reducer_todos';
import visibilityFilter from '../reducers/reducer_visibilityFilter';

const rootReducer = combineReducers({
    todos,
    visibilityFilter
})

export default rootReducer;