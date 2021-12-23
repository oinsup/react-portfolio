import React from "react";

const Logo = ({name,src}) => {
    return (
        <h1 className='logo'>
            <img src={src} alt={name}/>
        </h1>
    );
};

export default Logo;