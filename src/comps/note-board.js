import React from "react";
import NewNote from "./newNote";
import Styles from "../css/note-board.css";
import Masonry from 'react-masonry-css'

function NoteBoard({ notes, setNotes, columns }) {
    return (

        <Masonry breakpointCols={columns}
            className="note-board"
            columnClassName="my-masonry-grid_column">

            {notes.map((note) => (
                <NewNote
                    key={note.id}
                    setNotes={setNotes}
                    notes={notes}
                    note={note}
                />
            ))}

        </Masonry>
    )
}


/*            <section className="note-board">
                <NewNote title="Test" />
                <NewNote title="Test 2" />
                <NewNote title="Test 2" />
                <NewNote title="Test 2" />

            </section>*/

export default NoteBoard;