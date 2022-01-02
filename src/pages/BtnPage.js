import React from "react";
import { BtnArea, BtnType01, BtnType02 } from "../styles/Button";

const BtnPage = () => {
    return (
        <BtnArea>
            <BtnType01>
                <span>버튼</span>
            </BtnType01>
            <BtnType02>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span>버튼</span>
            </BtnType02>
        </BtnArea>
    );
};

export default BtnPage;
