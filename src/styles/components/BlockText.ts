import styled from 'styled-components';
import themes from '../colors/themes';

interface ContainerProps{
    heightExtern: string;
}

export const Container = styled.article<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 320px;
    height: ${ props => props.heightExtern };
    background-color: ${themes.colors.main_sub_black};
    border-radius: 20px;
    border: 2px solid ${themes.colors.main_sub_gray};
    margin: 15px 0px;
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