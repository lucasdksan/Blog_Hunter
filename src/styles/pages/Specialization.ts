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
export const FormationArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 500px;
    padding: 30px 20px;
    margin-bottom: 10px;
    background-color: #353535;
`;
export const TitleFomation = styled.h1`
    font-size: 28px;
    font-family: 'Roboto';
    font-weight: bold;
    color:  #fff;
    margin-bottom: 10px;
`;
export const BlockFormation = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 10px 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 45px;
`;
export const ImgFormation = styled.img`
    width: 40px;
    height: 40px;
`;
export const DescriptionFormation = styled.p`
    font-size: 20px;
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
    color: #fff;
    margin-left: 20px;
`;
export const ExperienceArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 500px;
    padding: 20px 20px;
    margin-bottom: 10px;
    background-color: #fff;
`;
export const TitleExperience = styled.h1`
    font-size: 28px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #353535;
    margin-bottom: 10px;
`;
export const BlockExperience = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 10px 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 80px;
`;
export const ImgExperience = styled.img`
    width: 120px;
    height: 70px;
`;
export const DescriptionExperience = styled.p`
    font-size: 22px;
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
    color: #000;
    margin-left: 20px;
`;