import React from "react";

const columns = "";

const CheckWidth = () => {
    if (document.querySelector(".slide-menu").classList.contains("menu-open")) {
        columns = 3;
    } else {
        columns = 4;
    }
    console.log(document.querySelector(".slide-menu").classList.contains("menu-open"))
}

export default columns;