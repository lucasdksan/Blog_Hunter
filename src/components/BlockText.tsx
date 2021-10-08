import React from 'react';

import { Container, AreaTitle, IconHello, Title, Description } from '../styles/components/BlockText';

interface Props {
    title?: string;
    text?: string;
}

const BlockText:React.FC <Props>= ({ text, title })=>{
    return(
        <Container>
            <AreaTitle>
                <IconHello/>
                <Title>{title}</Title>
            </AreaTitle>
            <Description>
                { text }
            </Description>
        </Container>
    );
}

export default BlockText;