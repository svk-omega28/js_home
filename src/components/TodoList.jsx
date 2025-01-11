import React from 'react';
import '../styles/TodoList.scss';

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className={`todo-item ${todo.completed ? 'completed' : ''}`}
                >
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span className="todo-text">{todo.text}</span>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
