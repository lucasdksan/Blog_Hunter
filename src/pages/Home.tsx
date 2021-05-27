import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TargetEnd from '../components/TargetEnd';
import UpBotton from '../components/UpButton';
import SkillCard from '../components/Skills_Card';
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
         TextFourth, 
         SubTextFourth,
         AreaSkills,
         SkillsFull,
         CoffeeContent, 
         CoffeeIcon,
         CoffeeTextCard, 
         CoffeeTitle,
         NextSkills } from '../styles/pages/Home';
import CoffeeI from '../assets/Coffe.png';
import Data from '../data/CardData';
import Data_Info from '../data/Card_Info';
import DataSkill from '../data/Skills_info';
import NextDataSkill from '../data/Next_Skills';

const HeartCoffee = {
    hidden: {
      backgroundColor: "#f5f3f4"
    },
    hover:{
      scale: 1.1,
      backgroundColor: "#d00000",
      transition: {
        durantion: 1,
        yoyo: Infinity,
      }
    }
  };

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
                    <Text>Bem vindos ao meu Blog. Aqui vou apresentar meus projetos, resultados dos meus estudos e dicas.</Text>
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
                        <CoffeeContent
                            variants={HeartCoffee}
                            whileHover='hover'
                        >
                            <CoffeeTitle>Café</CoffeeTitle>
                            <CoffeeIcon
                                src={CoffeeI}
                            />
                            <CoffeeTextCard>
                                Café é vida, energia constante!
                            </CoffeeTextCard>
                        </CoffeeContent>
                    </AreaCard>
                </ThirdBlock>
                <FourthBlock>
                    <TextFourth>
                        Skills
                    </TextFourth>
                    <AreaSkills>
                        <SubTextFourth>Linguagens e tecnologias que domino</SubTextFourth>
                        <SkillsFull>
                            {
                                DataSkill.map(itens =>{
                                    return (
                                        <SkillCard 
                                            skill={itens.skill} 
                                            title={itens.title}
                                            link={itens.link}
                                            key={itens.title}
                                        />
                                    );
                                })
                            }
                        </SkillsFull>
                        <SubTextFourth>Linguagens e tecnologias que estou estudando</SubTextFourth>
                        <NextSkills>
                            {
                                NextDataSkill.map(itens => {
                                    return(
                                        <SkillCard
                                            skill={itens.skill}
                                            title={itens.title}
                                            link={itens.link}
                                            key={itens.title}
                                        />
                                    );
                                })
                            }
                        </NextSkills>
                    </AreaSkills>
                </FourthBlock>
            </Content>
            <UpBotton/>
            <Footer/>
            <TargetEnd/>
        </Container>
    );
}

export default Home;