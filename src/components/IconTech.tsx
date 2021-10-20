import React from "react";

import { Container, Title } from "../styles/components/IconTech";

interface Props{
    name: string;
}

const IconTech: React.FC <Props>= ({ name, children })=>{
    const loopMotion = {
        hidden: {
            scale: 1
        },
        hover:{
            scale: 1.1,
            transition: {
                durantion: 0.1,
                yoyo: Infinity,
            }
        }
    }
    return(
        <Container
            variants={loopMotion}
            initial="hidden"
            whileHover="hover"
        >
            {children}
            <Title>{name}</Title>
        </Container>
    );
}

export default IconTech;