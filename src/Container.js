import React,{useState} from 'react';
import Header from './Header'
import FullpageWrapper from './Fullpage';



// 자식컴포넌트에서 부모컴포넌트로 데이터 불러오기 참고
const Container = () => {
    const [clName,setClName] = useState('')
    const getData = (cls) => {
        setClName(cls)
    }
    return (
        <>
            <Header prop={clName}/>
            <div id="container">
                <FullpageWrapper getData={getData}/>
            </div>
        </>
    );
};

export default Container;