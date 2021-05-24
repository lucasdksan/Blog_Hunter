import React from 'react';
import { Container,
         SocialNetworkContent,
         InstagramIcon,
         TwitterIcon,
         LinkedinIcon,
         GithubIcon,
         Links,
         Line,
         Text } from '../styles/components/Footer';

const Footer = ()=>{
    return(
        <Container>
            <SocialNetworkContent>
                <Links target="_blank"><InstagramIcon/></Links>
                <Links href="https://twitter.com/Lucasda24527132" target="_blank"><TwitterIcon/></Links>
                <Links href="https://www.linkedin.com/in/lucas-silva-464b45164/" target="_blank"><LinkedinIcon/></Links>
                <Links href="https://github.com/lucasdksan" target="_blank"><GithubIcon/></Links>
            </SocialNetworkContent>
            <Line/>
            <Text>
                Caçando a evolução constante.
            </Text>
        </Container>
    );
}

export default Footer;