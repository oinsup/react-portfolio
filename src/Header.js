import React from 'react';
import styled from 'styled-components';
import { LiStyle } from './Style';

const LiStyle2 = styled(LiStyle)`
    color:red;
`;
const Header = ({prop}) => {
    console.log(LiStyle.length)
    return (
        <header id='header' className={prop}>
            <div className='inner'>
                <h1 className='logo'>로고</h1>
                <ul className='menu'>
                    <LiStyle2>
                        <a href="#page01">
                            <span>P</span>
                            <span>R</span>
                            <span>O</span>
                            <span>F</span>
                            <span>I</span>
                            <span>L</span>
                            <span>E</span>
                        </a>
                    </LiStyle2>
                    <LiStyle>
                        <a href="#page02">
                            <span>P</span>
                            <span>O</span>
                            <span>R</span>
                            <span>T</span>
                            <span>F</span>
                            <span>O</span>
                            <span>L</span>
                            <span>I</span>
                            <span>O</span>
                        </a>
                    </LiStyle>
                    <LiStyle>
                        <a href="#page03">
                            <span>S</span>
                            <span>T</span>
                            <span>Y</span>
                            <span>L</span>
                            <span>E</span>
                            <span> G</span>
                            <span>U</span>
                            <span>I</span>
                            <span>D</span>
                            <span>E</span>
                        </a>
                    </LiStyle>
                    <LiStyle>
                        <a href="#page04">
                            <span>C</span>
                            <span>O</span>
                            <span>N</span>
                            <span>T</span>
                            <span>A</span>
                            <span>C</span>
                            <span>T</span>
                        </a>
                    </LiStyle>
                </ul>
            </div>
        </header>
    );
};

export default Header;