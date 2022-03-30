import React from "react";
import NewNote from "./newNote";

function MenuOption({ title }) {

    return (
        <div className="content">
            <NewNote title={title} />
        </div>
    )
}

export default MenuOption;