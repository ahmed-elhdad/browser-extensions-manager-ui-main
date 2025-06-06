"use client"
import { useState } from 'react';


import React from 'react'
import logo  from "../../assets/images/logo.svg"
import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
const Bar = () => {
    const [mode, setMode] = useState("dark");
    const [img, setImg] = useState(iconSun);
    const descriptions = document.querySelectorAll("p");
    const changeMode = () => {
        const extention = document.querySelectorAll(".extention");
        const filterButtons = document.querySelectorAll(".filter-button");
        const extentionHeader = document.querySelector(".filter h1");
        const removeButtons = document.querySelectorAll("button.remove-button");
        console.log(removeButtons);
        if (mode === "dark") {
            setMode("light");
            // Change mode for remove buttons:
            removeButtons.forEach((item) => {
                item.classList.remove("dark-text")
                item.classList.add("light-text")
            })
            // Change the mode for filter section
            extentionHeader.classList.remove("dark-text");
            extentionHeader.classList.add("light-text");
            // Change the background color of each buttons
            filterButtons.forEach((item) => {
                item.classList.remove("bg-dark");
                item.classList.add("bg-light");
            });
            // Change mode for extention's description:
            descriptions.forEach((item) => {
                item.classList.add("light-text");
                item.classList.remove("dark-text");
            });
            if (extention) { 
                // Change the background color of each extention
                extention.forEach((item) => {
                    item.classList.remove("bg-dark");
                    item.classList.add("bg-light");
                });
            }
            document.body.classList.remove("bg-dark");
            document.body.classList.add("bg-light");
            setImg(iconMoon);
        } else if (mode === "light") {

            // Change mode for remove buttons
            removeButtons.forEach((item) => {
                item.classList.remove("light-text")
                item.classList.add("dark-text")
            })
            // Change mode for filter section
            extentionHeader.classList.remove("light-text");
            extentionHeader.classList.add("dark-text");
            // Change the background color of each buttons
            filterButtons.forEach((item) => {
                item.classList.add("bg-dark");
                item.classList.remove("bg-light");
            });
            // Change mode for extention's description
            descriptions.forEach((item) => {
                item.classList.add("dark-text");
                item.classList.remove("light-text");
            })
            if (extention) { 
                extention.forEach((item) => {
                    item.classList.add("bg-dark");
                    item.classList.remove("bg-light");
                });
            }
            setMode("dark");
            setImg(iconSun);
            document.body.classList.add("bg-dark");
            document.body.classList.remove("bg-light");
        }
        else {
            setMode("dark");
            const button = document.getElementById("mode-button");
            const img = document.querySelector("#mode-button > img");
        }
        
        if (mode === "dark") {

        }
    }
        return (
            <>
                <div className={`bar bg-${mode} w-7xl flex justify-between p-1 pr-3 pl-3 items-center bg-neutral-900 rounded-xl`}>
                    <img className='w-48' src={logo} alt="" />
                    <button name={mode} id='mode-button' onClick={changeMode} className={`button-${mode} rounded-sm orange-focus p-2 cursor-pointer transtion-border duration-75 bg-${mode}`}>
                        <img src={img} alt="" />
                    </button>
                </div>
            </>
        );
    };
export default Bar;