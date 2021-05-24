import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;
export const FirstBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 550px;
    background-color: #353535;
`;
export const Image = styled.img`
    width: 280px;
    height: 280px;
    border-radius: 50%;
    margin-bottom: 10px;
`;
export const TextIntro = styled.h1`
    font-size: 35px;
    font-family: 'Roboto';
    width: 650px;
    margin-bottom: 10px;
    text-align: start;
    color: #fff;
`;
export const Text = styled.h2`
    font-size: 22px;
    font-family: 'Times New Roman', Times, serif;
    width: 650px;
    text-align: start;
    color: #979dac;
`;
export const SecondBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 10px;
    width: 100%;
    height: 600px;
    background-color: #fff;
`;
export const TextSecond = styled.h1`
    font-size: 30px;
    font-family: 'Roboto';
    font-style: normal;
    text-align: start;
    color: #353535;
    margin-bottom: 20px;
`;
export const AreaCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    padding: 5px 100px;
    width: 100%;
    height: 100%;
`;
export const ThirdBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 10px;
    width: 100%;
    height: 550px;
    background-color: #353535;
`;
export const TextThird = styled.h1`
    font-size: 35px;
    font-family: 'Roboto';
    font-style: normal;
    text-align: start;
    color: #fff;
    margin-bottom: 20px;
`;
export const FourthBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    width: 100%;
    height: 100px;
    background-color: #fff;
`;
export const TextFourth = styled.span`
    font-size: 25px;
    font-family: 'Roboto';
    font-style: italic;
    text-align: start;
    color: #7400b8;
`;