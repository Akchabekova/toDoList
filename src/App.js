import React from "react";
import './App.css';
import TodoList from "./components/ToDoLIst";
import Background from "./components/Background";




function App() {
    return (
        <div className="container">
            <Background />
            <TodoList/>
        </div>

    );
}

export default App;
