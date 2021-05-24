import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TargetEnd from '../components/TargetEnd';
import UpBotton from '../components/UpButton';
import { Container, 
         Content,
         FirstBlock, 
         Title, 
         TitleContent, 
         YoutubeIcon,
         MiniTitle, 
         LinkPlayList,
         PlayIcon,
         MainChannel,
         } from '../styles/pages/Opinions';
import Data_YouTube from '../data/Card_YouTube';
import CardYouTube from '../components/CardYouTube';

const Opinions = ()=>{
    return(
        <Container>
            <Header/>
            <Content>
                <FirstBlock>
                    <TitleContent>
                        <YoutubeIcon/>
                        <Title>YouTube</Title>
                    </TitleContent>
                    <LinkPlayList 
                        href='https://www.youtube.com/playlist?list=PLdSIFEo50fOb5fqzXErFsF1WWKkjKgntE'
                        target='_blanck'
                    >
                        <PlayIcon/>
                        <MiniTitle>PlayList sobre Programação Web.</MiniTitle>
                    </LinkPlayList>
                    <Title>Dicas de canais para estudos aprofundados</Title>
                    <MainChannel>
                        {
                            Data_YouTube.map(itens => {
                                return(
                                    <CardYouTube
                                        image = {itens.image}
                                        link = {itens.link}
                                        text = {itens.text}
                                        key = {itens.text}
                                    />
                                );
                            })
                        }
                    </MainChannel>
                </FirstBlock>
            </Content>
            <UpBotton/>
            <Footer/>
            <TargetEnd/>
        </Container>
    );
}

export default Opinions;