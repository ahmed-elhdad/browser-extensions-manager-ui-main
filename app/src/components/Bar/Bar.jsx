"use client"
import { useState } from 'react';


import React from 'react'
import logo  from "../../assets/images/logo.svg"
import iconSun from "../../assets/images/icon-sun.svg";
const Bar = () => {
    const [mode, setMode] = useState("dark");
    const changeMode = () => {
        if (mode === "dark") {
            setMode("light");
            console.log("light mode");
            document.body.classList.remove("bg-dark");
            document.body.classList.add("bg-light");
        } else if (mode === "light") {
            setMode("dark");
            console.log("dark mode");
            document.body.classList.add("bg-dark");
            document.body.classList.remove("bg-light");
        }
        else {
            setMode("dark");
            console.log("dark mode");
        }

        if (mode === "dark") {

        }
    }
        return (
            <>
                <div className={`bar-${mode} w-7xl flex justify-between p-1 pr-3 pl-3 items-center bg-neutral-900 rounded-xl`}>
                    <img className='w-48' src={logo} alt="" />
                    <button onClick={changeMode} className={`button-${mode} rounded-sm orange-focus p-2 cursor-pointer transtion-border duration-75 bg-${mode}`}>
                        <img src={iconSun} alt="" />
                    </button>
                </div>
            </>
        );
    };
export default Bar;