import React from "react";
import Image from "next/image";
import Logo from "$asset@logo.png";
import { dancingScript, jetBrainsMono } from "$utils@fonts";
import { NavItems } from "$data@constants";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import Settings from "./Settings";

const Navbar = () => {
    return (
        <div className="w-full sticky top-0 bg-white shadow-md">
            <nav className="w-4/5 h-full mx-auto px-2 py-4 grid place-content-between grid-cols-3">
                <span className="w-fit flex justify-center items-center gap-2">
                    <Image src={Logo} alt="ByteChat" height={40} width={60} />
                    <h1
                        className={
                            dancingScript.className + " text-4xl font-bold"
                        }
                    >
                        ByteChat
                    </h1>
                </span>
                <ul className="flex items-center justify-center gap-4 px-2">
                    {NavItems.map((item, idx: React.Key) => (
                        <Link href={item.path} key={idx}>
                            <li
                                className={`text-3xl text-center font-medium px-4 py-2 relative h-full w-full ${styles.nav_item} ${jetBrainsMono.className}`}
                            >
                                <h1>{item.name}</h1>
                            </li>
                        </Link>
                    ))}
                </ul>
                <ul className="flex justify-end items-center gap-2 px-4 py-2">
                    <button className="text-4xl p-[0.35rem] border-[1.5px] border-transparent hover:border-gray-600 rounded-md duration-200 hover:brightness-125 text-[#6213d8]">
                        <MdOutlineAccountCircle />
                    </button>
                    <Settings />
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
