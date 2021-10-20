import styled from 'styled-components';
import { motion } from 'framer-motion';
import themes from '../colors/themes';

export const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 80px;
    height: 80px;
    background-color: ${themes.colors.main_sub_gray};
    border-radius: 15px;
    padding: 10px;
`;
export const Title = styled.p`
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    color: ${themes.colors.mian_baby_blue};
`;