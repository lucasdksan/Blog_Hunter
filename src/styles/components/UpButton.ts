import styled from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const Container = styled.div`
    z-index: 4;
    flex-direction: row;
    background: #0c0f0a;
    font-size: 20px;
    cursor: pointer;
    position: fixed;
    bottom: 40px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes scrollTop{
        from{
            transform: translateY(2px);
        }
        to{
            transform: translateY(-1px);
        }
    }
`;
export const Botton = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const ArrowIcon = styled(MdKeyboardArrowUp)`
    font-size: 40px;
    color: #fff;
    animation: scrollTop 0.5s alternate ease infinite;
`;