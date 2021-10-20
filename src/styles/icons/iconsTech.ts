import styled, { css } from 'styled-components';
import { FaReact } from "react-icons/fa";
import { SiElectron, 
        SiHtml5, 
        SiCss3, 
        SiJavascript, 
        SiArduino, 
        SiCplusplus, 
        SiNextDotJs, 
        SiTypescript } from "react-icons/si";

import themes from "../colors/themes";

const linkCss = css`
    color: ${themes.colors.main_dark_blue};
    font-size: 40px;
    transition: 0.5s ease;
`;

export const IconReact = styled(FaReact)`${linkCss}`;
export const IconReactNative = styled(FaReact)`${linkCss}`;
export const IconElectron = styled(SiElectron)`${linkCss}`;
export const IconNext = styled(SiNextDotJs)`${linkCss}`;
export const IconHtml = styled(SiHtml5)`${linkCss}`;
export const IconCss = styled(SiCss3)`${linkCss}`;
export const IconJs = styled(SiJavascript)`${linkCss}`;
export const IconArduino = styled(SiArduino)`${linkCss}`;
export const IconTs = styled(SiTypescript)`${linkCss}`;
export const IconCpp = styled(SiCplusplus)`${linkCss}`;