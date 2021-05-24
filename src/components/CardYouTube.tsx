import React from 'react';
import { Container,
         Icon,
         TextCard,
         Link,
         YTIcon } from '../styles/components/CardYouTube';

interface Props{
    image: string;
    text: string;
    link: string;
}

const CardYouTube:React.FC<Props> = ({ image, text, link })=>{
    return(
        <Container>
            <TextCard>{text}</TextCard>
            <Icon
                src={image}
            />
            <Link
                href={link}
                target='_blanck'
            >
                <YTIcon/>
            </Link>
        </Container>
    );
}

export default CardYouTube;