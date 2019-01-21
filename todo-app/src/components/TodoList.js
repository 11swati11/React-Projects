import React from 'react';
import TodoListItem from '../components/TodoListItem';


const TodoList = ({ todos, toggleTodo }) => {
    if (!todos)
        return false;

    const TodoItem = todos.map((todo, index) => {
        return <TodoListItem
            key={index}
            keyIndex={'index-' + index}
            todo={todo}
            isChecked={todo.completed}
            onToggleTodo={() => toggleTodo(index)} />
    })
    return (
        <ul className="list-unstyled">
            {TodoItem}
        </ul>
    )
}


export default TodoList;