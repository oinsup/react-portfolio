import React from 'react';
import styled from 'styled-components';

const LiStyle = styled.li`
    padding:0 15px;
    font-size:24px;
    font-weight:bold;
    color:#585858;
    a{
        span{display:inline-block;
            &:nth-of-type(1){transition:.2s;}
            &:nth-of-type(2){transition:.2s .05s;}
            &:nth-of-type(3){transition:.2s .1s;}
            &:nth-of-type(4){transition:.2s .15s;}
            &:nth-of-type(5){transition:.2s .2s;}
            &:nth-of-type(6){transition:.2s .25s;}
            &:nth-of-type(7){transition:.2s .3s;}
            &:nth-of-type(8){transition:.2s .35s;}
            &:nth-of-type(9){transition:.2s .4s;}
            &:nth-of-type(10){transition:.2s .45s;}
        }
        &:hover{
            span{transform:translateY(-10px);}
        }
    }
`;

const Header = ({prop}) => {
    return (
        <header id='header' className={prop}>
            <div className='inner'>
                <h1 className='logo'>로고</h1>
                <ul className='menu'>
                    <LiStyle>
                        <a href="#page01">
                            <span>P</span>
                            <span>R</span>
                            <span>O</span>
                            <span>F</span>
                            <span>I</span>
                            <span>L</span>
                            <span>E</span>
                        </a>
                    </LiStyle>
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