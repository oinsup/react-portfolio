import React from 'react';
import styled from 'styled-components';
import {ListStyle,CardStyle,TitStyle} from './Style'

const gitDomain = "https://oinsup.github.io/"

const myPortfolio = {
    "maptype":[
        {title:"스마트국토정보",src:"./images/img-smartland.jpg",link: gitDomain},
        {title:"LX 지도서비스",src:"./images/img-lx-map.jpg",link: gitDomain},
        {title:"임업진흥원 지도서비스",src:"./images/img-imup.jpg",link: gitDomain},
        {title:"국토교통부 공간정보플랫폼(KGEOP) 지도드림",src:"./images/img-imup.jpg",link: gitDomain}
    ],
    "webtype":[
        {title:"이북5도",src:"../images/img-ibuk5do.jpg",link:gitDomain},
        {title:"LX국토정보플랫폼",src:"./images/img-lx-potal.jpg",link:gitDomain+"lx-potal/B안(포탈)/build/html/00_coding_list.html"},
        {title:"전주시 데이터포털",src:"./images/img-jeonju.jpg",link:gitDomain+"lx-potal/A안(전주시)/build/html/00_coding_list.html"},
        {title:"LX 통합 대시보드",src:"./images/img-lx-dashboard.jpg",link:gitDomain},
        {title:"국토교통부 공간정보플랫폼(KGEOP) 포털",src:"./images/img-kgeo-potal.jpg",link: gitDomain}
        
    ]
}
const List = ({prop}) => {
    return (
        <ListStyle>
            {myPortfolio[prop].map(({title,src,link},index) => {
                return(
                    <CardStyle key={index} onClick={() => {
                        window.open("about:blank").location.href = link
                    }}>
                        <div className='imgArea'>
                            <img src={src} alt={title}/>
                        </div>
                        <div className='txtArea'>
                            <div className='inner'>
                                <TitStyle>{title}</TitStyle>
                            </div>
                        </div>
                    </CardStyle>
                )
            })}
        </ListStyle>
    );
};

export default List;