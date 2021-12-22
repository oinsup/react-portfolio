import styled from 'styled-components';

export const Button = styled.button`
position:relative;
border-radius:5px;
width:180px;
height:40px;
color:#fff;
font-size:24px;
font-weight:bold;
`
export const BtnType01 = styled(Button)`
background:red;
&:after{position:absolute;left:0;bottom:5px;display:block;content:'';width:100%;height:4px;background:#fff;}
`