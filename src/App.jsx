import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app-body">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

export default App;
