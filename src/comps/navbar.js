import React from "react";
import styles from "../css/navbar.css";
import NewNote from "./newNote";
import Slide from "../js/menu-slide";

function Navbar({ setColumns }) {
    return (
        <section id="navbar">
            <div>
                <div id="navbarFeatures">
                    <button className="navbarBtn" onClick={() => Slide("notes", setColumns)}>
                        <i class="fa-regular fa-circle-check"></i>
                    </button>

                    <button className="navbarBtn" onClick={() => Slide("favorites", setColumns)}>
                        <i className="fas fa-heart" id="navbarHeart-s"></i>
                    </button>

                    <button className="navbarBtn" onClick={() => Slide("deleted", setColumns)}>
                        <i className="fas fa-archive"></i>
                    </button>

                    <button className="navbarBtn" onClick={() => Slide("settings", setColumns)}>
                        <i className="fas fa-cog"></i>
                    </button>

                </div>
            </div>
        </section >
    )
}

export default Navbar;

