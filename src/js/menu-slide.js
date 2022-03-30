import React from "react";
import NoteBoard from "../comps/note-board";
import SlideMenu from "../comps/slide-menu";
import MenuOption from "../comps/menu-option";

var open = false;
var last;




const Slide = (category, setColumns) => {
    const menu = document.querySelector(".slide-menu");
    const noteBoard = document.querySelector(".note-board");
    const navbarWidth = document.querySelector("#navbar").offsetWidth;
    const menuWidth = menu.offsetWidth;

    if (open === false) {
        setColumns("3");
    }

    if (open === true) {
        setColumns("4");
    }

    if (open) {


        if (category === "settings" && last === "settings") { //If the category "settings" was selected and then clicked again

            menu.classList.remove("menu-open");
            noteBoard.classList.remove("menu-open");
            noteBoard.style.marginLeft = navbarWidth * 2 + "px";
            console.log("open", open);
            open = false;

        } else if (category === "settings" && last !== "settings") { //If the category "settings" was only clicked once

            console.log("settings selected");
            last = "settings";
            SlideMenu("nummer1");

        }

        if (category === "deleted" && last === "deleted") {  //If the category "deleted" was selected and then clicked again

            menu.classList.remove("menu-open");
            noteBoard.classList.remove("menu-open");
            noteBoard.style.marginLeft = navbarWidth * 2 + "px";
            console.log("open", open);
            open = false;

        } else if (category === "deleted" && last !== "deleted") { //If the category "deleted" was only clicked once

            console.log("deleted selected");
            last = "deleted";
            SlideMenu("nummer2");
        }

        if (category === "notes" && last === "notes") { //If the category "notes" was selected and then clicked again

            menu.classList.remove("menu-open");
            noteBoard.classList.remove("menu-open");
            noteBoard.style.marginLeft = navbarWidth * 2 + "px";
            console.log("open", open);
            open = false;

        } else if (category === "notes" && last !== "notes") { //If the category "notes" was only clicked once

            console.log("notes selected");
            last = "notes";
            SlideMenu("nummer3");
        }

        if (category === "favorites" && last === "favorites") { //If the category "notes" was selected and then clicked again

            menu.classList.remove("menu-open");
            noteBoard.classList.remove("menu-open");
            noteBoard.style.marginLeft = navbarWidth * 2 + "px";
            console.log("open", open);
            open = false;

        } else if (category === "favorites" && last !== "favorites") { //If the category "notes" was only clicked once

            console.log("favorites selected");
            last = "notes";
            SlideMenu("nummer3");
        }

    } else {

        menu.classList.add("menu-open");
        noteBoard.classList.add("menu-open");
        noteBoard.style.marginLeft = menuWidth + navbarWidth * 2 + "px";
        console.log("closed", open);
        open = true;

    }

    last = category;
}

export default Slide;