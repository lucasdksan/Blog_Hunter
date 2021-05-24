import styled from 'styled-components';
import { AiFillStar, AiOutlineCloudDownload, AiOutlineFork, AiOutlineHome } from 'react-icons/ai';
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiCplusplus } from 'react-icons/si';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 30px 30px;
    margin-bottom: 20px;
    border-radius: 10px;
    width: 60%;
    height: 300px;
    background-color: #f5f3f4;
    box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 15px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #353535;
`;
export const Description = styled.p`
    font-size: 20px;
    margin-bottom: 10px;
    font-family: 'Times New Roman', Times, serif;
    text-align: justify;
    color: #000;
    width: 100%;
`;
export const AreaStatus = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 40px;
`;
export const MineBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-right: 10px;
    width: 100%;
    height: 100%;
`;
export const NameMineBox = styled.span`
    font-size: 15px;
    font-family: 'Roboto';
    color: #000;
`;
export const StarIcon = styled(AiFillStar)`
    color: #ffd60a;
    font-size: 20px;
    margin-right: 3px;
`;
export const ForkIcon = styled(AiOutlineFork)`
    color: #48bfe3;
    font-size: 20px;
    margin-right: 3px;
`;
export const DownloadIcon = styled(AiOutlineCloudDownload)`
    color: #660708;
    font-size: 20px;
    margin-right: 3px;
`;
export const GenericIcon = styled(AiOutlineHome)`
    color: #b1a7a6;
    font-size: 20px;
    margin-right: 3px;
`;
export const JSIcon = styled(SiJavascript)`
    color: #ffbe0b;
    font-size: 20px;
    margin-right: 3px;
`;
export const TSIcon = styled(SiTypescript)`
    color: #01497c;
    font-size: 20px;
    margin-right: 3px;
`;
export const HTMLIcon = styled(SiHtml5)`
    color: #d00000;
    font-size: 20px;
    margin-right: 3px;
`;
export const CSSIcon = styled(SiCss3)`
    color: #3c096c;
    font-size: 20px;
    margin-right: 3px;
`;
export const CppIcon = styled(SiCplusplus)`
    color: #720026;
    font-size: 20px;
    margin-right: 3px;
`;
export const LinkGit = styled.a`
    text-decoration: none;
`;
