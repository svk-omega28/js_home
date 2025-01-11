import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import './styles/Reset.scss';
import './styles/App.scss';


const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'First Task', completed: false },
        { id: 2, text: 'Second Task', completed: true },
    ]);

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="app">
            <h1>TODO List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodo addTodo={addTodo} />
            <Footer />
        </div>
    );
};

export default App;
