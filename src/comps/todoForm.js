import React from "react";

const TodoForm = ({ setInputText, inputText, setTodos, todos }) => {

    const uid = function () {
        return (new Date()).getTime();
    }


    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: uid() }
        ]);
        setInputText("");
    }

    return (
        <form>
            <input value={inputText} placeholder="Todo..." type="text" onChange={inputTextHandler} />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus"></i>
            </button>
        </form>
    );
}

export default TodoForm;