
import styled from 'styled-components';

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