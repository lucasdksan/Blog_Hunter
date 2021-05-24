import React from 'react';
import { Container, 
         Title,
         Description,
         AreaStatus,
         MineBox,
         LinkGit,
         NameMineBox,
         StarIcon,
         ForkIcon,
         DownloadIcon,
         CSSIcon,
         CppIcon,
         GenericIcon,
         HTMLIcon,
         JSIcon,
         TSIcon } from '../styles/components/CardGitHub';

interface Props{
    name: string;
    description: string;
    star: number;
    fork: number;
    download: string;
    language: string;
}

const CardGitHub:React.FC<Props> = ({description, download, star, name, language, fork})=>{
    function Icons(){
        if(language === 'JavaScript'){
            return <JSIcon/>
        }
        else if(language === 'TypeScript'){
            return <TSIcon/>
        }
        else if(language === 'HTML'){
            return <HTMLIcon/>
        }
        else if(language === 'C++'){
            return <CppIcon/>
        }
        else if(language === 'CSS'){
            return <CSSIcon/>
        }
        else{
            return <GenericIcon/>
        }
    }
    return (
        <Container>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <AreaStatus>
                <MineBox>
                    <StarIcon/>
                    <NameMineBox>{star}</NameMineBox>
                </MineBox>
                <MineBox>
                    <ForkIcon/>
                    <NameMineBox>{fork}</NameMineBox>
                </MineBox>
                <MineBox>
                    <DownloadIcon/>
                    <LinkGit href={download} target="_blank"><NameMineBox>Acessar o Repositório</NameMineBox></LinkGit>
                </MineBox>
                <MineBox>
                    {
                        Icons()
                    }
                    <NameMineBox>{language}</NameMineBox>
                </MineBox>
            </AreaStatus>
        </Container>
    );
}

export default CardGitHub;