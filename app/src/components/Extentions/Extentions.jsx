"use client"
import React, { useEffect, useState } from 'react'
import Filter from '../Filter/Filter';
import Loading from '../Loading/Loading';
import changeMode from "../Function/Function";


const Extensions = () => {
    const [extentions, setExtentions] = useState([]);
    const [mode, setMode] = useState("dark");
    
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setExtentions(data));
    }, []);

    return (
        <>
            <changeMode />
            <Filter />
            <Loading />
            <div className="extentions p-10 grid grid-cols-4 gap-2">
                {extentions.map((ext, index) => (
                    <div className='extention justify-between flex flex-col bg-dark gap-4 p-2 rounded-2xl' key={index}>
                        <div className="info flex p-1 gap-3 items-center">
                            <img src={ext.logo} />
                            <div className="extention-info">
                                <h3 className='font-bold  white-text extention-name'>{ext.name}</h3>
                                <p className='extention-description text-white white-text'>{ext.description}</p>

                            </div>
                        </div>
                        <div className="controls flex items-center justify-between">
                            <button className='rounded-2xl pr-2 pl-2 pb-0.5 cursor-pointer capitalize font-stretch-110% pt-0.5 bg-transparent border remove-button text-white font-medium'>remove</button>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
// ...existing code...
export default Extensions;