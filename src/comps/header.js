import React, { useState } from "react";
import styles from "../css/header.css";
import NewNote from "./newNote";
import CheckWidth from "./checkWidth";

function Header({ username, notes, setNotes, setColumns }) {

    const uid = function () {
        return (new Date()).getTime();
    }

    const submitNoteHandler = (e) => {
        e.preventDefault();
        setNotes([
            ...notes, { id: uid() }
        ]);

        const tx = document.getElementsByTagName("textarea");
        for (let i = 0; i < tx.length; i++) {
            tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
            tx[i].addEventListener("input", OnInput, false);
        }

        function OnInput() {
            this.style.height = "auto";
            this.style.height = (this.scrollHeight) + "px";
        }

        if (document.querySelector(".slide-menu").classList.contains("menu-open")) {
            setColumns("3");
        } else {
            setColumns("4");
        }

    }

    return (
        <header>
            <div id="logoText">
                <a href="#">
                    <div className="profilePic" /*style={this.backgroundImage = profilePic}*/></div>
                </a>
                <div>
                    <h1 id="headMobile">Scratch Board</h1>
                    <h1 id="headDesktop">Scratch</h1>


                    <p>{username}</p>
                </div>
            </div>
            <button className="createFileH" onClick={submitNoteHandler}>
                <i className="fas fa-plus"></i>
            </button>
        </header>
    )
}

export default Header;