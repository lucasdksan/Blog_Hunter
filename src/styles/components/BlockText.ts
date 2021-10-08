import styled from 'styled-components';
import { CgHello } from 'react-icons/cg';
import themes from '../colors/themes';

export const Container = styled.article`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 300px;
    height: 300px;
    background-color: ${themes.colors.main_sub_black};
    border-radius: 20px;
    border: 2px solid ${themes.colors.main_sub_gray};
`;
export const AreaTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    height: 80px;
    padding: 5px 20px;
`;
export const IconHello = styled(CgHello)`
    font-size: 50px;
    margin-right: 10px;
    color: ${themes.colors.main_dark_blue};
`;
export const Title = styled.h1`
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: ${themes.colors.mian_baby_blue};
`;
export const Description = styled.p`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: ${themes.colors.main_sub_dark_blue};
    text-align: justify;
    padding: 10px 10px;
`;