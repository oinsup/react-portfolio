import React from "react";
import { LiStyle } from '../../styles/Header';
import myData from '../../data.json'

const {meunList} = myData;

const Menu = () => {
    return (
        <ul className='menu'>
            {meunList.map((i,index) =>{
                const slice = i.split("")
                return(
                    <LiStyle key={index}>
                        <a href={"#page0"+Number(index+1)}>
                            {slice.map((j,idx)=>{
                                return(
                                    <span key={idx}>{j}</span>
                                )
                            })}
                        </a>
                    </LiStyle>
                )}
            )}
        </ul>
    );
};

export default Menu;