import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import myData from '../../data.json'

//비구조화할당
const {logo} = myData;
const {name,src} = logo; 

const Header = ({prop}) => {
    return (
        <header id='header' className={prop}>
            <div className='inner'>
                <Logo name={name} src={src}/>
                <Menu/>
            </div>
        </header>
    );
};

export default Header;