import React,{useState} from "react";
import { BtnType06 } from "../styles/Button";
import styled from "styled-components";
import { Table } from "../styles/Table";

const TableGroup = styled.div`
    width: 100%;
`;

const BtnGroup = styled.div`
    margin-bottom:40px;
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
const TablePage = (props) => {
    const arr = [1,2,3,4,5,6];
    const [classes,setClasses] = useState();
    const onClick = (j) =>{
        setClasses('type0'+j);
    }
    return (
        <TableGroup>
            <BtnGroup>
                {arr.map(i=>{
                    return(
                        <BtnType06 onClick={() => {onClick(i)}}><span>{i}번 타입</span></BtnType06>
                    )
                })}
            </BtnGroup>
            <Table className={classes}>
                <table>
                    <caption>테이블캡션</caption>
                    <thead>
                        <tr>
                            <th scope="col">text</th>
                            <th scope="col">text</th>
                            <th scope="col">text</th>
                            <th scope="col">text</th>
                            <th scope="col">text</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">text</th>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <th scope="row">text</th>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <th scope="row">text</th>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                        </tr>
                    </tbody>
                </table>
            </Table>
        </TableGroup>
    );
};

export default TablePage;
