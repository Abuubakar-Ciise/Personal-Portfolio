import React from "react";

const Button = ({children ,className})=> {

   
    return (
        <button className={className}>
            {children}
        </button>
    )
}

export default Button