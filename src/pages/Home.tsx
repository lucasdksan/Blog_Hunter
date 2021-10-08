import React from 'react';

import { Container, FirstBlock, ImgEng } from '../styles/pages/Home';

import Header from '../components/Header';
import BlockText from '../components/BlockText';

import { dataInfo } from '../data/DataInfo';

const Home = ()=>{
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
                    <ImgEng src="https://avatars.githubusercontent.com/u/47578616?v=4"/>
                    {
                        dataInfo.map(itens => {
                            return (
                                <BlockText
                                    key={itens.key}
                                    text={itens.text}
                                    title={itens.title}
                                />
                            );
                        })
                    }
                </FirstBlock>
            </Container>
        </>
    );
}

export default Home;