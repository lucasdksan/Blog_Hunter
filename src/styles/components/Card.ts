import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 50px 10px;
    border-radius: 10px;
    width: 255px;
    height: 355px;
    background-color: #f5f3f4;
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.2);
`;
export const Icon = styled.img`
    width: 160px;
    height: 160px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const TextCard = styled.h2`
    font-size: 22px;
    text-align: center;
    font-family: 'Roboto';
`;
export const Title = styled.span`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    font-family: 'Roboto';
`;
