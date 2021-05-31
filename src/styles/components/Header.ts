import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    background-color: #FFF;
    padding: 5px 10px;
    left: 0;
    right: 0;
    top: 0;
`;
export const Image = styled.img`
    width: 150px;
    height: 70px;
`;
export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 400px;
    padding: 0px 50px;
`;
export const NameMenu = styled(Link)`
    font-size: 16px;
    font-style: normal;
    text-decoration: none;
    font-family: 'Roboto';
    color: #000;
    transition: 0.5s;
    &:hover{
        cursor: pointer;
        color: #7400b8;
        transition: 0.2s linear;
    }
`;