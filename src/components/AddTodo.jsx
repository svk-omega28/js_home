import React, { useState } from 'react';
import '../styles/AddTodo.scss';

const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form className="add-todo" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Какие планы на сегодня?"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddTodo;
