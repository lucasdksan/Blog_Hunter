import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    height: 580px;
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
export const CoffeeContent = styled(motion.div)`
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
export const CoffeeIcon = styled.img`
    width: 160px;
    height: 160px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const CoffeeTextCard = styled.h2`
    font-size: 22px;
    text-align: center;
    font-family: 'Roboto';
`;
export const CoffeeTitle = styled.span`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    font-family: 'Roboto';
`;
export const FourthBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 40px 60px;
    width: 100%;
    height: 600px;
    background-color: #fff;
`;
export const TextFourth = styled.span`
    font-size: 35px;
    font-family: 'Roboto';
    font-weight: bold;;
    font-style: normal;
    text-align: start;
    color: #353535;
`;
export const SubTextFourth = styled.span`
    font-size: 20px;
    font-family: 'Roboto';
    font-style: normal;
    text-align: start;
    color: #353535;
    margin-left: 50px;
    margin-bottom: 30px;
`;
export const AreaSkills = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
`;
export const SkillsFull = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    flex: 1;
    width: 100%;
    height: 100%;
`;
export const NextSkills = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: row;
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 10px 450px;
`;