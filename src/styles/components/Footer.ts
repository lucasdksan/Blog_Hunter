import styled, { css } from 'styled-components';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';

const IconsFooter = css`
    width: 50px;
    font-size: 50px;
    color: #f8f9fa;
    transition: all 1.5s linear;
    &:hover{
        transition: all 1s linear;
        color: #c77dff;
        opacity: 0.7; 
    }
`;

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #353535;
    width: 100%;
    height: 250px;
    bottom: 0px;
    right: 0px;
    left: 0px;
`;
export const SocialNetworkContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 30%;
    margin-bottom: 5px;
    padding: 5px 50px;
    justify-content: space-between;
    align-items: center;
`;
export const Line = styled.span`
    width: 55%;
    border-bottom: 2px solid #ffffff;
    margin-bottom: 5px;
`;
export const Links = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.7s linear;
    &:hover{
        cursor: pointer;
        transition: all 0.7s linear;
    }
`;
export const Text = styled.h1`
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-family: 'Roboto';
`;
export const InstagramIcon = styled(AiOutlineInstagram)`${IconsFooter}`;
export const LinkedinIcon = styled(AiOutlineLinkedin)`${IconsFooter}`;
export const TwitterIcon = styled(AiOutlineTwitter)`${IconsFooter}`;
export const GithubIcon = styled(AiOutlineGithub)`${IconsFooter}`;