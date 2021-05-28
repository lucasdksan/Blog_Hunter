import React from 'react';
import { Container,
         Icon,
         TextCard,
         YTIcon } from '../styles/components/CardYouTube';

interface Props{
    image: string;
    text: string;
    link: string;
}

const CardYouTube:React.FC<Props> = ({ image, text, link })=>{
    function openLink(links:string){
        if(link === ''){
            return alert('Ainda em desenvolvimento...');
        } else {
            window.open(links);
        }
    }
    return(
        <Container
            onClick={()=> openLink(link)}
            whileHover={{
                y: -10,
                boxShadow: "10px 20px 6px 2px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#ced4da",
            }}
        >
            <TextCard>{text}</TextCard>
            <Icon
                src={image}
            />
                <YTIcon/>
        </Container>
    );
}

export default CardYouTube;