import React from 'react';
import {ListStyle,CardStyle,TitStyle} from '../../styles/Card'
import myData from '../../data.json'


const List = ({prop}) => {
    return (
        <ListStyle>
            {myData[prop].map(({title,src,link},index) => {
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