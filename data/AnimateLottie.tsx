import Lottie from "react-lottie";

import AnimationKey from "../assets/developer.json";
import AnimationKey1 from "../assets/development.json";
import AnimationKey2 from "../assets/softwareDevelopment.json";

const defaultOptions = [
    {
        loop: true,
        autoplay: true,
        animationData: AnimationKey,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    },
    {
        loop: true,
        autoplay: true,
        animationData: AnimationKey1,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    },
    {
        loop: true,
        autoplay: true,
        animationData: AnimationKey2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
];

const AnimateElementHard = ()=> {
    return(
        <Lottie
            options={defaultOptions[0]}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0px 0px 10px 10px',
            }}
        />
    );
}

const AnimateElementHard1 = ()=> {
    return(
        <Lottie
            options={defaultOptions[1]}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0px 0px 10px 10px',
            }}
        />
    );
}

const AnimateElementHard2 = ()=> {
    return(
        <Lottie
            options={defaultOptions[2]}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0px 0px 10px 10px',
            }}
        />
    );
}

export { AnimateElementHard, AnimateElementHard1, AnimateElementHard2 };