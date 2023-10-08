"use client";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { jetBrainsMono } from "$utils@fonts";
import { FiSun } from "react-icons/fi";
import { TbChristmasTree } from "react-icons/tb";
import { FaRegMoon } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Settings = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <motion.button
                className="text-4xl p-[0.35rem] border-[1.5px] border-transparent hover:border-gray-600 rounded-md duration-200 hover:brightness-125 text-[#6213d8]"
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
                            className={`px-4 z-[2] h-screen w-1/5 bg-white opacity-100 ${jetBrainsMono.className}`}
                        >
                            <div className="flex justify-between items-center py-4">
                                <h1 className="text-2xl font-medium">
                                    Settings
                                </h1>
                                <button
                                    className="p-2 grid place-items-center text-3xl text-[#6213d8] rounded-full hover:bg-gray-200 duration-200"
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
                                    <li className="flex justify-center items-center gap-2 text-lg rounded-l-lg border-2 border-[#6213d8] py-2">
                                        <span className="text-[#6213d8] text-2xl">
                                            <FiSun />
                                        </span>
                                        Light
                                    </li>
                                    <li className="flex justify-center items-center gap-2 text-lg border-2 border-gray-500 py-2 border-x-0">
                                        <span className="text-[#0c021d] text-2xl">
                                            <FaRegMoon />
                                        </span>
                                        Dark
                                    </li>
                                    <li className="flex justify-center items-center gap-2 text-lg rounded-r-lg border-2 border-gray-500 py-2">
                                        <span className="text-[#0c021d] text-2xl">
                                            <TbChristmasTree />
                                        </span>
                                        Xmas
                                    </li>
                                </ul>
                            </div>
                            <div className="py-4">
                                <h1 className="text-xl font-medium py-2">
                                    Edit theme
                                </h1>
                                <button className="w-full flex justify-center items-center gap-6 text-lg rounded-lg border-[1.5px] border-[#6213d8] py-2">
                                    <span className="text-[#6213d8] text-2xl">
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
