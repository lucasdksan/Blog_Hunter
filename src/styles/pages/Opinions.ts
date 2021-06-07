import styled from 'styled-components';
import { AiFillYoutube } from 'react-icons/ai';
import { MdPlaylistPlay } from 'react-icons/md';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
`;
export const Content = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;
export const FirstBlock = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 550px;
    background-color: #353535;
    margin-bottom: 5px;
`;
export const TitleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 10px 20px;
    width: 100%;
    height: 60px;
`;
export const Title = styled.h1`
    font-size: 30px;
    font-family: 'Roboto';
    color: #fff;
`;
export const YoutubeIcon = styled(AiFillYoutube)`
    color: #FF0000;
    font-size: 45px;
    margin-right: 10px;
`;
export const MiniTitle = styled.h2`
    font-size: 22px;
    font-family: 'Times New Roman', Times, serif;
    color: #fff;
    font-weight: 400;
`;
export const PlayIcon = styled(MdPlaylistPlay)`
    color: #FF0000;
    font-size: 40px;
    margin-right: 15px;
`;
export const LinkPlayList = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const MainChannel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    padding: 20px 40px;
    width: 100%;
    height: 100%;
    flex: 1;
`;