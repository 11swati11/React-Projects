import React from 'react';

const TodoList = () => (
    <ul>
        <li>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" for="customCheck1">Check this custom checkbox</label>
            </div>
        </li>
    </ul>
)

export default TodoList;