import styled from "styled-components";

export const Table = styled.div`
    width:100%;border-top:2px solid #333;border-bottom:2px solid #333;
    table{width:100%;text-align:center;
        thead{
            tr{
                th{transition:.4s;color:#000;background:#ccc;height:30px;}
            }
        }
        tbody{
            tr{
                th,td{transition:.4s;color:#000;height:30px;}
                th{background:#ccc;}
                td{background:#fff;}
            }
        }
    }
    &.type01{
        thead{
            tr{
                th{color:#fff;background:#0a95ff;height:40px;}
            }
        }
        tbody{
            tr{
                th,td{}
                th{color:#fff;background:#0a95ff;height:40px;}
                td{}
            }
        }
    }
    &.type02{
        thead{
            tr{
                th{border-left:1px solid #666;
                    &:first-child{border-left:0;}
                }
            }
        }
        tbody{
            tr{
                th,td{}
                th{}
                td{}
            }
        }
    }
`
