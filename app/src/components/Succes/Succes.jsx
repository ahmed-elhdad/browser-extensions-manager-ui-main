
import React from 'react';
import X from "../../assets/images/icon-x.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Succes = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <p className="text-green-500">Your operation was successful!</p>
            <button>
               X
            </button>
        </div>
    );
}
export default Succes;