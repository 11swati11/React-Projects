import React from 'react';

const TodoListItem = ({ keyIndex, isChecked, onToggleTodo, todo }) => {
    console.log('todo=', todo)
    return (
        <li>
            <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id={keyIndex}
                    checked={isChecked}
                    onChange={onToggleTodo}
                />
                <label className="custom-control-label" htmlFor={keyIndex}>
                    {todo.text}
                </label>
            </div>
        </li>
    )
}

// const isChecked = (props) => {
//     console.log(props.todo.completed, 'feffef')
//     setTimeout(() => {
//         console.log(props.todo.completed, 'settime')
//         return props.todo.completed; 
//     }, 1000);

// }

export default TodoListItem;