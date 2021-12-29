import React from 'react';
import {BtnType01,BtnType02,BtnType03,BtnType04,BtnType05,BtnType06,BtnType07,BtnType08 } from '../styles/Button';
import styled from 'styled-components';

const BtnGroup = styled.div`
    display:flex;
    flex-wrap:wrap;
    button{
        width:calc(20% - 8px);
        margin-right:10px;
        margin-top:20px;
        &:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(4),&:nth-of-type(5){margin-top:0;}
        &:nth-of-type(5n){margin-right:0;}
    }
`

const BtnPage = () => {
    return (
        <BtnGroup>
            <BtnType01><span>버튼</span></BtnType01>
            <BtnType02><span>버튼</span></BtnType02>
            <BtnType03><span>버튼</span></BtnType03>
            <BtnType04><span>버튼</span></BtnType04>
            <BtnType05><span>버튼</span></BtnType05>
            <BtnType06><span>버튼</span></BtnType06>
            <BtnType07><span>버튼</span></BtnType07>
            <BtnType08><span>버튼</span></BtnType08>
            <BtnType04><span>버튼</span></BtnType04>
            <BtnType05><span>버튼</span></BtnType05>
        </BtnGroup>
    );
};

export default BtnPage;