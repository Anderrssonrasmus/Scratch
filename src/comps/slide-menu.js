import React, { useState } from "react";
import Styles from "../css/slide-menu.css";
import Slide from "../js/menu-slide";
import MenuOption from "./menu-option";
import Navbar from "./navbar";
import TodoForm from "./todoForm";
import Todos from "./todos";


function SlideMenu() {


    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <section className="slide-menu">
            <TodoForm setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} />
            <Todos todos={todos} setTodos={setTodos} />
        </section>

    )
}

export default SlideMenu;