import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SiJavascript, 
         SiTypescript, 
         SiHtml5, 
         SiCss3, 
         SiCplusplus, 
         SiReact, 
         SiElectron,
         SiArduino,
         SiNodeDotJs,
         SiWebgl,
         SiNextDotJs } from 'react-icons/si';

export const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 30px;
    width: 100px;
    height: 100px;
    background-color: #f5f3f4;
    box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.2);
    &:hover{
        cursor: pointer;
    }
`;
export const Title = styled.h1`
    font-size: 12px;
    font-family: 'Roboto';
`;
export const JSIcon = styled(SiJavascript)`
    color: #ffbe0b;
    font-size: 40px;
    margin-bottom: 10px;
`;
export const TSIcon = styled(SiTypescript)`
    color: #01497c;
    font-size: 40px;
    margin-bottom: 10px;
`;
export const HTMLIcon = styled(SiHtml5)`
    color: #d00000;
    font-size: 40px;
    margin-bottom: 10px;
`;
export const CSSIcon = styled(SiCss3)`
    color: #3c096c;
    font-size: 40px;
    margin-bottom: 10px;
`;
export const CppIcon = styled(SiCplusplus)`
    color: #720026;
    font-size: 40px;
    margin-bottom: 10px;
`;
export const ReactIcon = styled(SiReact)`
    color: #00ffff;
    font-size: 40px;
    margin-bottom: 10px;
`;
export const ElectronIcon = styled(SiElectron)`
    color: #11aeee;
    font-size: 40px;
    margin-bottom: 10px;
`;
export const ArduinoIcon = styled(SiArduino)`
    color: #008184;
    font-size: 40px;
    margin-bottom: 10px;
`;
export const NodeIcon = styled(SiNodeDotJs)`
    color: #0d731e;
    font-size: 40px;
    margin-bottom: 10px;
`;
export const NextIcon = styled(SiNextDotJs)`
    color: #000;
    font-size: 40px;
    margin-bottom: 10px;
`;
export const ThreeIcon = styled(SiWebgl)`
    color: #000;
    font-size: 40px;
    margin-bottom: 10px;
`;