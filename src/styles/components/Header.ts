import styled, { css } from 'styled-components';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import themes from '../colors/themes';

interface PropsChangeColor {
    colorChange: string;
}

const styleIcon = css`
    font-size: 40px;
    transition: 0.5s ease;
`;

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 80px;
    padding: 10px 40px;
    background-color: ${themes.colors.main_black};
    border-bottom: 1px solid ${themes.colors.main_sub_gray};
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
`;
export const Title = styled.h1<PropsChangeColor>`
    font-size: 25px;
    font-family: 'Roboto';
    font-weight: bold;
    font-style: oblique;
    font-variant: normal;
    color: ${ props=> props.colorChange };
    transition: 0.5s ease;
`;
export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: transparent;
    border: 0 none;
    outline: 0;
    cursor: pointer;
`;
export const IconHamburguer = styled(BiMenuAltRight)<PropsChangeColor>`
    ${styleIcon}
    color: ${props => props.colorChange};
`;
export const IconClose = styled(AiOutlineClose)<PropsChangeColor>`
    ${styleIcon}
    color: ${props => props.colorChange};
    font-size: 30px;
`;