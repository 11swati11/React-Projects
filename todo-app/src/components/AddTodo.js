import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import store from '..';

const AddTodo = (props) => {
    let input;
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={node => { input = node }} className="form-control" type="text" placeholder="What needs to be done?" />
            </form>
        </div>
    )
}

function onSubmit(e) {
    let addTodoText = input.value;
    e.preventDefault();
    props.addTodo(addTodoText);
    console.log(store.getState());
    resetInput();
}

function resetInput() {
    input.value = '';
}
function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTodo: addTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

