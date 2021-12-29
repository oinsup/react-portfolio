import styled from 'styled-components';

export const Button = styled.button`
    position:relative;
    overflow:hidden;
    border-radius:5px;
    width:${props => props.width || '180px'};
    height:${props => props.height || '50px'};
    color:#fff;
    font-size:24px;
    font-weight:bold;
    transition:.4s;
    span{
        position:relative;
        z-index:10;
    }
    &:after{
        transition:.4s;
    }
`
export const BtnType01 = styled(Button)`
    background:#0a95ff;
    &:after{
        position:absolute;
        left:0;
        top:0;
        display:block;
        content:'';
        width:0;
        height:100%;
        background:rgba(0,116,204,.7);
    }
    &:hover{
        box-shadow:0 3px 5px rgba(0,0,0,.15);
        &:after{
            width:100%;
            right:0;
            left:auto;
        }
    }
`
export const BtnType02 = styled(BtnType01)`
    &:after{
        left:auto;
        right:0;
    }
    &:hover{
        &:after{
            left:0;
            right:auto;
        }
    }
`
export const BtnType03 = styled(BtnType01)`
    &:after{
        width:100%;
        height:0;
    }
    &:hover{
        &:after{
            top:auto;
            bottom:0;
            height:100%;
        }
    }
`
export const BtnType04 = styled(BtnType03)`
    &:after{
        top:auto;
        bottom:0;
    }
    &:hover{
        &:after{
            top:0;
            bottom:auto;
        }
    }
`
export const BtnType05 = styled(BtnType01)`
    &:after{
        left:50%;
        top:50%;
        right:auto;
        bottom:auto;
        transform:translate(-50%,-50%);
        width:0;
        height:0;
        border-radius:50%;
    }
    &:hover{
        &:after{
            right:auto;
            bottom:auto;
            left:50%;
            top:50%;
            border-radius:0%;
            width:${props => props.width === undefined ? "360px" : "calc("+props.width+" * 1.1)" };
            height:${props => props.width === undefined ? "360px" : "calc("+props.width+" * 1.1)" };
        }
    }
`
export const BtnType06 = styled(BtnType01)`
    &:before,&:after,span:before,span:after{position:absolute;width:0;height:2px;display:block;content:'';background:#fff;transition:.4s;}
    &:before{left:0;top:0;right:auto;bottom:auto;}
    &:after{right:0;bottom:0;left:auto;top:auto;}
    span{display:flex;align-items:center;justify-content:center;height:100%;}
    span:before,span:after{width:2px;height:0;}
    span:before{left:0;bottom:0;}
    span:after{right:0;top:0;}
    &:hover{
        &:before,&:after{width:100%;}
        span:before,span:after{height:100%;}
    }

`
export const BtnType07 = styled(BtnType06)`
    span{
        &:before,&:after{
            transition:.4s .4s;
        }
    }

`
export const BtnType08 = styled(BtnType06)`
    &:before{transition:.2s .6s;}    
    &:after{transition:.2s .2s;}
    span{
        &:before{
            transition: .2s;
        }
        &:after{
            transition:.2s .4s;
        }
    }
    &:hover{
        &:before{transition:.2s;}    
        &:after{transition:.2s .4s;}
        span{
            &:before{
                transition:.2s .6s;
            }
            &:after{
                transition:.2s .2s;
            }
        }
    }

`