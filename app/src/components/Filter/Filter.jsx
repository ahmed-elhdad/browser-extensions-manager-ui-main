"use client"
import React from 'react'

const Filter = () => {
    const extentions = document.querySelectorAll("div.extention");
    let extentionsArray = Array.from(extentions);
    // let extentionsActiveArray = Array.from(activeExtentions)
    const filterButtons = document.querySelectorAll(".filter-button");
    const extentionsArea = document.querySelector(".extentions");
    const removeActiveFromAllButtons = () => {
        // Remove active to the button:
        filterButtons.forEach((item) => {
            item.classList.remove("active");
        })
    }
    return (
        <>
            <div className='filter mt-10 flex w-full pt-3 pr-10 pl-10 items-center justify-between '>
                <h1 className='font-bold white-text tracking-wide'>Extensions List</h1>
                <div className="filter-buttons flex gap-3 items-center">
                    <button onClick={(e) => {
                        removeActiveFromAllButtons()
                        e.target.classList.add("active");
                        extentionsArea.innerHTML = "";
                    }} className='filter-button bg-dark white-border white-text pr-4 pl-4 pt-1 pb-1 rounded-2xl orange-focus capitalize'>all</button>
                    <button onClick={(e) => {
                        removeActiveFromAllButtons()
                        e.target.classList.add("active");
                    }} className='filter-button bg-dark white-border white-text pr-4 pl-4 pt-1 pb-1 rounded-2xl orange-focus capitalize'>active</button>
                    <button onClick={(e) => {
                        removeActiveFromAllButtons()
                        e.target.classList.add("active");
                    }} className='filter-button bg-dark white-border white-text pr-4 pl-4 pt-1 pb-1 rounded-2xl orange-focus capitalize'>inactive</button>
                </div>
            </div>
        </>
    );
};

export default Filter;