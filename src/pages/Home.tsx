import React from 'react';
import Lottie from 'react-lottie';

import { Container, 
        FirstBlock, 
        ImgEng,
        SecondBlock,
        AreaCards } from '../styles/pages/Home';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlockText from '../components/BlockText';

import { dataInfo } from '../data/DataInfo';
import Animation from '../assets/animations/DeveloperAnimation.json';

const Home = ()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return(
        <>
            <Header />
            <Container>
                <FirstBlock
                    initial={{
                        x: -300,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    }}
                    transition={{
                        duration: 1,
                        type: 'spring',
                        stiffness: 20,
                    }}
                >
                    <ImgEng src="https://avatars.githubusercontent.com/u/47578616?v=4" alt="Minha imagem"/>
                    <AreaCards>
                        {
                            dataInfo.map((item) => {
                                return(
                                    <BlockText
                                        children={<item.icon/>}
                                        key={item.key}
                                        text={item.text}
                                        title={item.title}
                                        height={item.height}
                                    />
                                );
                            })
                        }    
                    </AreaCards>
                </FirstBlock>
                <SecondBlock>
                    <Lottie
                        options={defaultOptions}
                        height={'100%'}
                        width={280}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0px 0px 10px 10px',
                        }}
                    />
                </SecondBlock>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;