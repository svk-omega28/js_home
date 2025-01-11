import React, { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';
import Footer from './components/Footer.jsx';
import './styles/Reset.scss';
import './styles/App.scss';

const App = () => {
    const [todos, setTodos] = useState([]);

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const activeTodosCount = todos.filter(todo => !todo.completed).length;

    return (
        <div className="app">
            <h1>TODO List</h1>
            <p>Активных задач: {activeTodosCount}</p>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodo addTodo={addTodo} />
            <Footer />
        </div>
    );


};

export default App;
