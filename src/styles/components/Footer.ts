import styled, { css } from 'styled-components';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai';
import themes from '../colors/themes';

const linkCss = css`
    color: ${themes.colors.main_dark_blue};
    font-size: 45px;
    transition: 0.5s ease;
    &:hover{
        color: ${themes.colors.main_sub_dark_purple};
        cursor: pointer;
    }
`;

export const Container = styled.footer`
    background-color: ${themes.colors.main_sub_black};
    width: 100%;
    height: 460px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;
export const AreaTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 5px;
    margin-top: 5px;
    width: 100%;
`;
export const HeaderFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`;
export const SubText = styled.p`
    text-align: center;
    color: ${themes.colors.main_white};
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
`;
export const Img = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 15px;
`;
export const Title = styled.h1`
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: bold;
    color: ${themes.colors.mian_baby_blue};
`;
export const ClientArea = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 200px;
    padding: 15px;
`;
export const AreaNames = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
`;
export const SubTitle = styled.h2`
    font-size: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 15px;
    color: ${themes.colors.main_white};
`;
export const Employee = styled.a`
    text-decoration: none;
    font-size: 18px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 400;
    color: ${themes.colors.main_sub_dark_blue};
    margin-bottom: 10px;
    transition: 0.5s ease;
    &:hover{
        cursor: pointer;
        color: ${themes.colors.main_sub_baby_blue};
    }
`;
export const AreaNetWork = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${themes.colors.main_sub_gray};
    padding: 15px;
`;
export const ButtonLink = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${themes.colors.main_sub_gray};
    width: 60px;
    height: 60px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    border-radius: 20px;
`;
export const EmailIcon = styled(AiOutlineMail)`${linkCss}`;
export const InstaIcon = styled(AiOutlineInstagram)`${linkCss}`;
export const LinkIcon = styled(AiOutlineLinkedin)`${linkCss}`;
export const GitIcon = styled(AiOutlineGithub)`${linkCss}`;
export const TwitterIcon = styled(AiOutlineTwitter)`${linkCss}`;