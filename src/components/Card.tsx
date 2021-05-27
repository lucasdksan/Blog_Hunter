import React from 'react';
import { Container, Icon, TextCard, Title } from '../styles/components/Card';

interface Props {
    image: string;
    text: string;
    title?: string;
}

const Card: React.FC<Props> = ({text, image, title}) =>{
    return(
        <Container
            whileHover={{
                y: -50,
                boxShadow: "10px 20px 6px 2px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#ced4da",
            }}
        >
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