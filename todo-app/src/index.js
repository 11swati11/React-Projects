/**************************
*******REACT imports******* 
**************************/
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

/**************************
*******REDUX imports******* 
**************************/
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { VisibilityFilters } from './actions/index';

//.....................................................................
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter
  } from './actions/index'
//.....................................................................

// defining initial/default aaplication state
const initialState = {
    todos: [],
    visibilityFilter: VisibilityFilters.SHOW_ALL
}

// creating store
const store = createStore(rootReducer, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


export default store;







//.....................................................................
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
//.....................................................................

