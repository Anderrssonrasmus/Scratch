import React from "react"
import Styles from "../css/note.css";

function NewNote({ setNotes, note, notes }) {

    const deleteHandler = (e) => {

        const text = "Are you sure you want to delete this note?"
        if (window.confirm(text) == true) {
            setNotes(notes.filter(el => el.id !== note.id))
        } else {
            text = "You cancelled deletion of note";
        }
    }

    const updateTxa = () => {
        const tx = document.getElementsByTagName("textarea");
        for (let i = 0; i < tx.length; i++) {
            tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
            tx[i].addEventListener("input", OnInput, false);
        }

        function OnInput() {
            this.style.height = "auto";
            this.style.height = (this.scrollHeight) + "px";
        }
    }

    return (
        <div className="note">
            <div className="inputs">
                <textarea type="text" className="note-title" placeholder="Title..." onChange={updateTxa} />
                <textarea className="note-content" placeholder="Your notes..." onChange={updateTxa}></textarea>
            </div>
            <div className="option-buttons">
                <button onClick={deleteHandler} className="delete"><i className="fas fa-trash"></i></button>
            </div>
        </div>
    )
}

export default NewNote;