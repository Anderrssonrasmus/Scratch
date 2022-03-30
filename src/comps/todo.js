import React from "react";

const Todo = ({ text, setTodos, todo, todos }) => {

    //events

    const deleteHandler = (e) => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <div className="btns">
                <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
                <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
        </div>
    );
}

export default Todo;