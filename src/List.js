import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.div`
    display:flex;
    flex-wrap:wrap;
`
const CardStyle = styled.div`
    margin-right:30px;
    margin-top:30px;
    width:calc(33.3% - 20px);
    border-radius:10px;
    background:#fff;
    box-shadow:0 3px 6px rgba(0,0,0,.15);
    overflow:hidden;
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
`
const TitStyle = styled.strong`
    font-size:24px;
    color:#575757;
`
let myPortfolio = [
    {title:"이북5도",src:"../images/img-ibuk5do.jpg"},
    {title:"스마트국토정보",src:"../images/img-smartland.jpg"},
    {title:"LX국토정보플랫폼",src:"../images/img-lx-potal.jpg"},
    {title:"LX 지도서비스",src:"../images/img-lx-map.jpg"},
    {title:"전주시 데이터포털",src:"../images/img-jeonju.jpg"},
    {title:"LX 통합 대시보드",src:"../images/img-lx-dashboard.jpg"},
    {title:"임업진흥원 지도서비스",src:""},
    {title:"임업진흥원 지도서비스",src:""},
    {title:"임업진흥원 지도서비스",src:""},
    {title:"임업진흥원 지도서비스",src:""},
    {title:"임업진흥원 지도서비스",src:""},
]

const List = () => {
    return (
        <ListStyle>
            {myPortfolio.map((i,index) => {
                return(
                    <CardStyle key={index}>
                        <div className='imgArea'>
                            <img src={i.src} alt={i.title}/>
                        </div>
                        <div className='txtArea'>
                            <div className='inner'>
                                <TitStyle>{i.title}</TitStyle>
                            </div>
                        </div>
                    </CardStyle>
                )
            })}
        </ListStyle>
    );
};

export default List;