import React from 'react';
import { Container } from '../styles/components/Load';
import Lottie from 'react-lottie';
import Animation from '../assets/Animation.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const Load = ()=>{
    return (
        <Container>
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
            />
        </Container>
    );
}

export default Load;