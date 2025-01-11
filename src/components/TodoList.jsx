import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.scss';

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </div>
    );
};

export default TodoList;
