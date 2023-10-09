"use client";
import React from "react";

interface Props {
    _theme: string | undefined;
}

const Scrollbar: React.FC<Props> = ({ _theme }) => {
    const root = document.querySelector(":root") as HTMLElement;
    if (_theme === "dark") {
        root.style.setProperty("--scroll-thumb", "#4d485e ");
    } else if (_theme === "light") {
        root.style.setProperty("--scroll-thumb", "#6213d8");
    } else if (_theme === "autumn") {
        root.style.setProperty("--scroll-thumb", "#8C0327");
    }
    return null;
};

export default Scrollbar;
