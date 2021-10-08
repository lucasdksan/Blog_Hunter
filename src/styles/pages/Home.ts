import styled from 'styled-components';
import { motion } from 'framer-motion';
import themes from '../colors/themes';

export const Container = styled.main`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 10px;
    background-color: ${themes.colors.main_sub_black_2};
`;
export const FirstBlock = styled(motion.section)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 80px);
    padding: 15px 20px;  
`;
export const ImgEng = styled.img`
    margin-top: 10px;
    margin-bottom: 35px;
    width: 230px;
    border-radius: 50%;
`;
