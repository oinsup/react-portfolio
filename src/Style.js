import styled from 'styled-components';

const duration = 0.02;

export const LiStyle = styled.li`
    padding:0 15px;
    font-size:24px;
    font-weight:bold;
    color:#585858;
    a{
        span{display:inline-block;transition-duration:.5s;
            &:nth-of-type(1){transition-delay:${duration * 1}s}
            &:nth-of-type(2){transition-delay:${duration * 2}s}
            &:nth-of-type(3){transition-delay:${duration * 3}s}
            &:nth-of-type(4){transition-delay:${duration * 4}s}
            &:nth-of-type(5){transition-delay:${duration * 5}s}
            &:nth-of-type(6){transition-delay:${duration * 6}s}
            &:nth-of-type(7){transition-delay:${duration * 7}s}
            &:nth-of-type(8){transition-delay:${duration * 8}s}
            &:nth-of-type(9){transition-delay:${duration * 9}s}
            &:nth-of-type(10){transition-delay:${duration * 10}s}
        }
        &:hover{
            span{transform:translateY(-10px) rotateX(360deg) rotateY(360deg);}
        }
    }
`;


export const LiStyle2 = styled(LiStyle)`
    color:red;
`;

export const ListStyle = styled.div`
display:flex;
flex-wrap:wrap;
`
export const CardStyle = styled.div`
cursor:pointer;
margin-right:30px;
margin-top:30px;
width:calc(33.3% - 20px);
border-radius:10px;
background:#fff;
box-shadow:0 3px 6px rgba(0,0,0,.15);
overflow:hidden;
.imgArea{overflow:hidden;
    img{transition:.4s;}
}
&:nth-of-type(3n){
    margin-right:0;
}
&:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3){
    margin-top:0;
}
.imgArea{height:250px;
    img{width:100%;height:100%;}
}
.txtArea{
    >.inner{padding:25px 20px;}
}
&:hover{
    .imgArea{
        img{transform:scale(1.2);}
    }
}
`
export const TitStyle = styled.strong`
    font-size:24px;
    color:#575757;
`


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