import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiFillYoutube } from 'react-icons/ai';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 50px 10px;
    border-radius: 10px;
    width: 280px;
    height: 350px;
    background-color: #f5f3f4;
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.2);
    &:hover{
        cursor: pointer;
    }
`;
export const Icon = styled.img`
    width: 160px;
    height: 160px;
    margin-top: 10px;
    margin-bottom: 20px;
`;
export const TextCard = styled.h2`
    font-size: 22px;
    text-align: center;
    font-family: 'Roboto';
`;
export const YTIcon = styled(AiFillYoutube)`
    color: #FF0000;
    font-size: 40px;
`;