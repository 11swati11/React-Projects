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
import { VisibilityFilters } from './typeCodes';

//.....................................................................
// import {
//     addTodo,
//     toggleTodo,
//     //setVisibilityFilter
// } from './actions/index'
//.....................................................................

// defining initial/default aaplication state
const initialState = {
    todos: [
        {
            text: "Learn about one",
            completed: true
        },
        {
            text: "Learn about two",
            completed: false
        },
        {
            text: "Learn about three",
            completed: false
        }
    ],
    visibilityFilter: VisibilityFilters.SHOW_ALL
}

// creating store
const store = createStore(
    rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;







//.....................................................................
// Log the initial state
//console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
//const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
//store.dispatch(addTodo('Learn about actions'))
//store.dispatch(addTodo('Learn about reducers'))
//store.dispatch(addTodo('Learn about store'))
//store.dispatch(toggleTodo(2))
//store.dispatch(toggleTodo(1))
//store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))

// Stop listening to state updates
//unsubscribe()
//.....................................................................

