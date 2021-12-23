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
