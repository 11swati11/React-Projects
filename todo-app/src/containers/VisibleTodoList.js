import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions/index';
import { VisibilityFilters } from '../typeCodes';

//const todos = state.todos;

const getVisibilityTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);

        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);

        case VisibilityFilters.SHOW_ALL:
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibilityTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleTodo: toggleTodo }, dispatch)
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps)(TodoList);

export default VisibleTodoList;