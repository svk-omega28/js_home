import React from 'react';
import '../styles/TodoItem.scss';

const TodoItem = ({ todo, toggleTodo }) => {
    return (
        <div
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleTodo(todo.id)}
        >
            {todo.text}
        </div>
    );
};

export default TodoItem;
