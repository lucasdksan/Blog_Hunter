import React from 'react';
import { Container,
         Title,
         ArduinoIcon,
         CSSIcon,
         CppIcon,
         ElectronIcon,
         HTMLIcon,
         JSIcon,
         ReactIcon,
         TSIcon,
         NodeIcon,
         NextIcon,
         ThreeIcon
        } from '../styles/components/Skills_Card';

interface Props {
    skill: string;
    title: string;
    link?: string;
}


const Skills_Card: React.FC<Props> = ({ title, skill, link })=>{
    function openLink(links:string){
        if(link === ''){
            return alert('Ainda em desenvolvimento...');
        } else {
            window.open(links);
        }
    }
    function SelectIcon(){
        if(skill === 'arduino'){
            return <ArduinoIcon />;
        }
        else if(skill === 'Css'){
            return <CSSIcon/>;
        }
        else if(skill === 'Cpp'){
            return <CppIcon/>;
        }
        else if(skill === 'Electron'){
            return <ElectronIcon/>;
        }
        else if(skill === 'HTML'){
            return <HTMLIcon/>
        }
        else if(skill === 'JS'){
            return <JSIcon/>;
        }
        else if(skill === 'TS'){
            return <TSIcon/>;
        }
        else if(skill === 'React'){
            return <ReactIcon/>;
        }
        else if(skill === 'node'){
            return <NodeIcon/>
        }
        else if(skill === 'next'){
            return <NextIcon/>
        }
        else{
            return <ThreeIcon/>
        }
    }
    return(
        <Container
            whileHover={{
                            y: -5,
                            boxShadow: "3px 5px 6px 2px rgba(0, 0, 0, 0.2)",
                            backgroundColor: "#ced4da",
                        }}
            onClick={()=> openLink(link as string) }
        >
            {SelectIcon()}
            <Title>
                {
                    title
                }
            </Title>
        </Container>
    );
}

export default Skills_Card;