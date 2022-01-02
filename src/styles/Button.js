import styled from "styled-components";

export const BtnArea = styled.div`
    display:flex;
    justify-content:center;
    >button{margin:0 30px;}
`;
export const Button = styled.button`
    position: relative;
    border-radius: 5px;
    width: ${(props) => props.width || "120px"};
    height: ${(props) => props.height || "40px"};
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    transition: 0.4s;
    &:hover {
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
    }
`;

export const BtnType01 = styled(Button)`
    background: #376fee;
    overflow: hidden;
    span {
        position: relative;
        z-index: 1;
    }
    &:after {
        position: absolute;
        transition: 0.4s;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: block;
        content: "";
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.2);
    }
    &:hover {
        &:after {
            width: ${(props) => props.width || "200px"};
            height: ${(props) => props.height || "200px"};
        }
    }
`;

export const BtnType02 = styled(BtnType01)`
    .line{
        position:absolute;display:block;background:rgba(255,255,255,1);
        &:nth-of-type(1){left:0;top:0;width:0;height:3px;transition:.2s .6s;}
        &:nth-of-type(2){right:0;top:0;width:3px;height:0;transition:.2s .4s;}
        &:nth-of-type(3){right:0;bottom:0;width:0;height:3px;transition:.2s .2s;}
        &:nth-of-type(4){left:0;bottom:0;width:3px;height:0;transition:.2s;}
    }
    &:hover{
        .line{
            &:nth-of-type(1){width:100%;transition:.2s;}
            &:nth-of-type(2){height:100%;transition:.2s .2s;}
            &:nth-of-type(3){width:100%;transition:.2s .4s;}
            &:nth-of-type(4){height:100%;transition:.2s .6s;}
        }
    }
`;
