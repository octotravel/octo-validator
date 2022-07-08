import React, { MouseEvent } from "react";
import { IButton } from "../types";


const Button:React.FC<IButton>  =({children, onClick = () => {}, ...props})=>{
    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        onClick(e);
    };

    return (
        <button onClick={handleOnClick} className="rounded-md bg-button hover:bg-hoverButton text-text-base px-4 py-2 font-semibold hover:font-bold">
            {children}
        </button>
    )
}

export default Button