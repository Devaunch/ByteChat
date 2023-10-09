"use client";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { jetBrainsMono } from "$utils@fonts";
import { FiSun } from "react-icons/fi";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    _theme: string | undefined;
}

const Settings: React.FC<Props> = ({ _theme }) => {
    const [open, setOpen] = React.useState(false);
    const [theme, setTheme] = React.useState<string>(
        _theme === undefined ? "light" : _theme
    );

    const changeTheme = (theme: string) => {
        setTheme(theme);
        document.cookie = `theme=${theme}`;
        document.documentElement.classList.remove("light", "dark", "autumn");
        document.documentElement.classList.add(theme);

        const root = document.querySelector(":root") as HTMLElement;
        if (theme === "dark") {
            root.style.setProperty("--scroll-thumb", "#4d485e ");
        } else if (theme === "light") {
            root.style.setProperty("--scroll-thumb", "#6213d8");
        } else if (_theme === "autumn") {
            root.style.setProperty("--scroll-thumb", "#8C0327");
        }
    };
    return (
        <>
            <motion.button
                className="text-4xl p-[0.35rem] border-[1.5px] border-transparent hover:border-gray-600 rounded-md duration-200 hover:brightness-125 text-primary dark:text-dark-primary autumn:text-autumn-primary"
                onClick={() => setOpen(!open)}
            >
                <FiSettings />
            </motion.button>
            <AnimatePresence>
                {open && (
                    <div className="fixed top-0 left-0 flex justify-end w-full h-screen overflow-hidden">
                        <div
                            className="absolute h-screen w-full top-0 left-0 opacity-40 bg-black"
                            onClick={() => setOpen(!open)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className={`px-4 z-[2] h-screen w-1/5 bg-white dark:bg-bg-dark autumn:bg-bg-autumn opacity-100 ${jetBrainsMono.className}`}
                        >
                            <div className="flex justify-between items-center py-4">
                                <h1 className="text-2xl font-medium">
                                    Settings
                                </h1>
                                <button
                                    className="p-2 grid place-items-center text-3xl text-primary dark:text-dark-primary autumn:text-autumn-primary rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 duration-200"
                                    onClick={() => setOpen(!open)}
                                >
                                    <AiOutlineClose />
                                </button>
                            </div>
                            <div className="py-4">
                                <h1 className="text-xl font-medium py-2">
                                    Mode
                                </h1>
                                <ul className="grid grid-cols-3 grid-rows-1 place-content-between  py-2">
                                    <button
                                        className={`flex justify-center items-center gap-2 text-lg rounded-l-lg py-2 border-2 ${
                                            theme === "light"
                                                ? "border-primary dark:border-dark-primary autumn:border-autumn-primary"
                                                : "border-gray-300"
                                        } ${
                                            theme === "dark" ? "border-r-0" : ""
                                        }`}
                                        onClick={() => changeTheme("light")}
                                    >
                                        <span
                                            className={`text-2xl ${
                                                theme === "light"
                                                    ? "text-primary dark:text-dark-primary autumn:text-autumn-primary"
                                                    : ""
                                            }`}
                                        >
                                            <FiSun />
                                        </span>
                                        Light
                                    </button>
                                    <button
                                        className={`flex justify-center items-center gap-2 text-lg py-2 border-2 ${
                                            theme === "dark"
                                                ? "border-primary dark:border-dark-primary autumn:border-autumn-primary"
                                                : "border-gray-300"
                                        } ${
                                            theme === "light"
                                                ? "border-x-0"
                                                : ""
                                        } ${
                                            theme === "autumn"
                                                ? "border-x-0"
                                                : ""
                                        }`}
                                        onClick={() => changeTheme("dark")}
                                    >
                                        <span
                                            className={`text-2xl ${
                                                theme === "dark"
                                                    ? "text-primary dark:text-dark-primary autumn:text-autumn-primary"
                                                    : ""
                                            }`}
                                        >
                                            <FaRegMoon />
                                        </span>
                                        Dark
                                    </button>
                                    <button
                                        className={`flex justify-center items-center gap-2 text-lg py-2 rounded-r-lg border-2 border-l-0 ${
                                            theme === "autumn"
                                                ? "border-primary dark:border-dark-primary autumn:border-autumn-primary border-l-2"
                                                : "border-gray-300"
                                        } ${
                                            theme === "dark" ? "border-l-0" : ""
                                        }`}
                                        onClick={() => changeTheme("autumn")}
                                    >
                                        <span
                                            className={`text-2xl ${
                                                theme === "autumn"
                                                    ? "text-primary dark:text-dark-primary autumn:text-autumn-primary"
                                                    : ""
                                            }`}
                                        >
                                            <FaCanadianMapleLeaf />
                                        </span>
                                        Autumn
                                    </button>
                                </ul>
                            </div>
                            <div className="py-4">
                                <h1 className="text-xl font-medium py-2">
                                    Edit theme
                                </h1>
                                <button className="w-full flex justify-center items-center gap-6 text-lg rounded-lg border-[1.5px] border-primary dark:border-dark-primary autumn:border-autumn-primary py-2">
                                    <span className="text-primary dark:text-dark-primary autumn:text-autumn-primary text-2xl">
                                        <BsFillPencilFill />
                                    </span>
                                    Light
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Settings;
