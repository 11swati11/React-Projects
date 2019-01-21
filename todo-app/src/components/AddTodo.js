import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import store from '..';

const AddTodo = (props) => {
    let input;
    return (
        <div>
            <form onSubmit={e => { onSubmit(e, input, props) }}>
                <input ref={node => { input = node }} className="form-control" type="text" placeholder="What needs to be done?" />
            </form>
        </div>
    )
}

const onSubmit = (e, input, props) => {
    let addTodoText = input.value;
    preventReload(e);
    props.addTodo(addTodoText);
    resetInput(input);
    console.log(store.getState());
}

const preventReload = (e) => {
    e.preventDefault();
}

const resetInput = (input) => {
    input.value = '';
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTodo: addTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

