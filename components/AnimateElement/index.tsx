import Lottie from "react-lottie";

import Animation from "../../assets/animate.json";

import styles from "./styles.module.scss";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const AnimateElement = ()=> {
    return(
        <div className={styles.container}>
            <Lottie
                options={defaultOptions}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0px 0px 10px 10px',
                }}
            />
        </div>
    );
}

export default AnimateElement;