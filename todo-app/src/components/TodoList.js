import React from 'react';
import { TodoListItem } from '../components/TodoListItem';

const TodoList = (props) => {
    const TodoItem = props.todos.map((Todo) => {
        return <TodoListItem Todo={Todo} />
    })
    return (
        <ul className="list-unstyled">
            {TodoItem}
        </ul>
    )
}

export default TodoList;