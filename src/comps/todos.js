import React from "react";
import Todo from "./todo";

const Todos = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Todos;