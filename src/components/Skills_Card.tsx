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
         NodeIcon
        } from '../styles/components/Skills_Card';

interface Props {
    skill: string;
    title: string;
}


const Skills_Card: React.FC<Props> = ({ title, skill })=>{
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
        else {
            return <NodeIcon/>
        }
    }
    return(
        <Container
            whileHover={{
                            y: -5,
                            boxShadow: "3px 5px 6px 2px rgba(0, 0, 0, 0.2)",
                            backgroundColor: "#ced4da",
                        }}
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