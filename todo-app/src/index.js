import { createStore } from 'redux';
import rootReducer from '../src/reducers/index';
import { VisibilityFilters } from '../src/actions/index';

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter    
  } from '../src/actions/index';

const initialState = {
    todos: [],
    visibilityFilter: VisibilityFilters.SHOW_ALL
}

const store = createStore(rootReducer, initialState);


// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()


export default store;





