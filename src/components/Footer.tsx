import React from 'react';

import { Container, 
        Title,
        AreaNetWork,
        AreaTitle,
        Img,
        ClientArea,
        SubTitle,
        AreaNames,
        Employee,
        ButtonLink,
        EmailIcon,
        InstaIcon,
        LinkIcon,
        GitIcon,
        TwitterIcon,
        HeaderFooter,
        SubText } from "../styles/components/Footer";

         

import imageDev from "../assets/icons/studyArea/Desenvolvedor.png";

const Footer = ()=>{
    return(
        <Container>
            <HeaderFooter>
                <AreaTitle>
                    <Img src={imageDev}/>
                    <Title>Hunter</Title>
                </AreaTitle>
                <SubText>Blog Hunter 2021 <br/> Todos os direitos reservados</SubText>
            </HeaderFooter>
            <ClientArea>
                <SubTitle>Clientes</SubTitle>
                <AreaNames>
                    <Employee href="https://www.neuroharmony.med.br" target="_blank">Neuro Harmony</Employee>
                    <Employee href="https://test-site-sl.vercel.app" target="_blank">Silva e Lima</Employee>
                </AreaNames>
            </ClientArea>
            <AreaNetWork>
                <ButtonLink href="mailto: lucas.leoncio.silva@gmail.com" target="_blank"><EmailIcon/></ButtonLink>
                <ButtonLink href="https://www.instagram.com/lucas.ccac/" target="_blank"><InstaIcon/></ButtonLink>
                <ButtonLink href="https://www.linkedin.com/in/lucas-silva-464b45164/" target="_blank"><LinkIcon/></ButtonLink>
                <ButtonLink href="https://github.com/lucasdksan"><GitIcon/></ButtonLink>
                <ButtonLink href="https://twitter.com/Lucasda24527132"><TwitterIcon/></ButtonLink>
            </AreaNetWork>
        </Container>
    );
}

export default Footer;