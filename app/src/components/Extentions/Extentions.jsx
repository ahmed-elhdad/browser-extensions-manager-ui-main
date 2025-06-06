"use client";


import React, { useEffect, useState } from 'react'
import Filter from '../Filter/Filter';


const Extensions = () => {
    const [extentions, setExtentions] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setExtentions(data));
    }, []);

    return (
        <>
            <Filter />
            <div className={`extentions p-10 grid grid-cols-4 gap-2`}>
                {extentions.map((ext, index) => (
                    <div onClick={(e) => {
                        const extention = document.querySelector("extention");
                        if (extention) {
                            if (document.querySelector('label').className == "checked") {
                                extention.classList.add("is-active");
                                extention.classList.remove("in-active");
                                
                            } else {
                                extention.classList.remove("is-active");
                                extention.classList.add("in-active");
                            }

                        }
                    }} className={`extention justify-between flex flex-col bg-dark gap-4 p-2 rounded-2xl`} key={index}>
                        <div className="info flex p-1 gap-3 items-center">
                            <img src={ext.logo} />
                            <div className="extention-info">
                                <h3 className='font-bold  white-text extention-name'>{ext.name}</h3>
                                <p className='extention-description text-white white-text'>{ext.description}</p>
                            </div>
                        </div>
                        <div className="controls flex items-center justify-between">
                            <button className='rounded-2xl pr-2 pl-2 pb-0.5 cursor-pointer capitalize font-stretch-110% pt-0.5 bg-transparent border remove-button dark-text font-medium'>remove</button>
                            <label onClick={(e) => {
                                document.querySelector("label").classList.add("checked")
                            }} className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}


export default Extensions;