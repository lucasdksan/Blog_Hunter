import styled from 'styled-components';
import { FcAbout } from 'react-icons/fc';
import { CgHello } from 'react-icons/cg';
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
export const IconHello = styled(CgHello)`
    font-size: 50px;
    margin-right: 10px;
    color: ${themes.colors.main_dark_blue};
`;
export const IconAbout = styled(FcAbout)`
    font-size: 50px;
    margin-right: 10px;
    color: ${themes.colors.main_dark_blue};
`;
export const AreaCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    flex-direction: column;
    width: 100%;
`;
export const SecondBlock = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 80px);
    padding: 15px 20px;  
`;