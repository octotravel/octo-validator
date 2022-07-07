import React, { ReactNode } from "react";

interface IButton {
    children?: ReactNode
}

const Button:React.FC<IButton>  =({children, ...props})=>{
    return (
        <button className="rounded-md bg-primary hover:bg-hoverButton text-text-base px-3 py-1">
            {children}
        </button>
    )
}

export default Button