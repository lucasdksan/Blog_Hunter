import React, { useState } from 'react';

import { Container, Title, IconHamburguer, MenuButton, IconClose } from '../styles/components/Header';

import SideMenu from './SideMenu';
import MenuM from './MenuM';
import themes from '../styles/colors/themes';

const Header = ()=>{
    const [ colorChange, setColorChange ] = useState(themes.colors.main_white);
    const [ selectColor, setSelectColor ] = useState(true);

    function handelToggle(){
        if(window.toggleActiveMenu) window.toggleActiveMenu();
        if(selectColor){
            setColorChange(themes.colors.main_purple);
        } else {
            setColorChange(themes.colors.main_white);
        }
        setSelectColor(!selectColor);
    }

    return(
        <>
            <Container>
                <Title colorChange={colorChange}>Hunter</Title>
                <MenuButton onClick={handelToggle}>
                    {
                        selectColor ? (
                                        <IconHamburguer
                                            colorChange={colorChange}
                                        />  ) :(
                                            <IconClose
                                                colorChange={colorChange}
                                            />
                                        )
                    }
                </MenuButton>
            </Container>
            <SideMenu>
                <MenuM />    
            </SideMenu>
        </>
    );
}

export default Header;