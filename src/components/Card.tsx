import React from 'react';
import { Container, Icon, TextCard, Title } from '../styles/components/Card';

interface Props {
    image: string;
    text: string;
    title?: string;
}

const Card: React.FC<Props> = ({text, image, title}) =>{
    return(
        <Container>
            {
                title && <Title>{title}</Title>
            }
            <Icon
                src={image}
            />
            <TextCard>
                {text}
            </TextCard>
        </Container>
    );
}

export default Card;