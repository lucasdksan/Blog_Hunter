import styled from 'styled-components';
import { AiOutlineCopyright } from 'react-icons/ai'

export const Container = styled.div`
    left: 0px;
    top: 100%;
    bottom: 0px;
    right: 0px;
    margin-bottom: auto;
    height: 40px;
    width: 100%;
    background: #000;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const Copyright = styled(AiOutlineCopyright)`
    color: #ffffff;
    font-size: 20px;
    margin-right: 10px;
`;
export const Text = styled.p`
    font-family: 'Times New Roman', Times, serif;
    color: #ffffff;
    font-size: 16px;
    @media(max-width: 380px){
        display: none;
    }
`;