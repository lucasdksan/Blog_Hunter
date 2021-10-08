import React from 'react';

import { Container, 
        AreaTitle, 
        Title, 
        Description } from '../styles/components/BlockText';

interface Props {
    title: string;
    text: string;
    height?: string;
}

const BlockText:React.FC <Props>= ({ text, title, height="300px", children })=>{
    return(
        <Container
            heightExtern={height}
        >
            <AreaTitle>
                {children}
                <Title>{title}</Title>
            </AreaTitle>
            <Description>
                { text }
            </Description>
        </Container>
    );
}

export default BlockText;