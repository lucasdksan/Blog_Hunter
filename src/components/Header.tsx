import React from 'react'
import { Container,
         Image,
         Menu,
         NameMenu } from '../styles/components/Header';
import imageLogo from '../assets/LogoHeader.png';

const Header = ()=>{
    return(
        <Container>
            <Image
                src={imageLogo}
            />
            <Menu>
                <NameMenu to='/'>HOME</NameMenu>
                <NameMenu to='/specialization'>FORMAÇÃO</NameMenu>
                <NameMenu to='/opinions'>DICAS</NameMenu>
                <NameMenu to='/projects'>PROJETOS</NameMenu>
            </Menu>
        </Container>
    )
}

export default Header;