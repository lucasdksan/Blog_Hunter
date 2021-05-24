import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TargetEnd from '../components/TargetEnd';
import UpBotton from '../components/UpButton';
import { Container,
         Content, 
         FirstBlock, 
         Image,
         TextIntro,
         Text, 
         SecondBlock,
         TextSecond,
         AreaCard,
         ThirdBlock,
         TextThird,
         FourthBlock,
         TextFourth } from '../styles/pages/Home';
import Data from '../data/CardData';
import Data_Info from '../data/Card_Info';

const Home = ()=>{
    return(
        <Container>
            <Header/>
            <Content>
                <FirstBlock>
                    <Image
                        src='https://avatars.githubusercontent.com/u/47578616?s=400&u=795fd6da85b035741a018b46c1005b1450cf957d&v=4'
                    />
                    <TextIntro>
                        Saudações, sou Lucas da Silva Leoncio.
                    </TextIntro>
                    <Text>Bem vindos ao meu Blog, aqui vou apresentar meus projetos, resultados dos meus estudos e dicas.</Text>
                </FirstBlock>
                <SecondBlock>
                    <TextSecond>
                            CONTEÚDOS QUE VOCÊ VAI ENCONTRAR AQUI!
                    </TextSecond>
                    <AreaCard>
                        {
                            Data.map(({image, text})=>{
                                return <Card text={text} image={image}/>
                            })
                        }
                    </AreaCard>
                </SecondBlock>
                <ThirdBlock>
                    <TextThird>MAIS SOBRE MIM</TextThird>
                    <AreaCard>
                        {
                            Data_Info.map(({image, text, title})=>{
                                return <Card text={text} image={image} title={title} />
                            })
                        }
                    </AreaCard>
                </ThirdBlock>
                <FourthBlock>
                    <TextFourth>
                        Logo abaixo minhas redes sociais.
                    </TextFourth>
                </FourthBlock>
            </Content>
            <UpBotton/>
            <Footer/>
            <TargetEnd/>
        </Container>
    );
}

export default Home;