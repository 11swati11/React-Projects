import React from 'react';

const TodoListItem = (props) => (
        <li>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
            </div>
        </li>
)

export default TodoListItem;