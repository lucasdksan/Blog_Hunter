import styles from "./styles.module.scss";
import { CardWelcomeType } from "../../types/CardWelcomeType";

const CardWelcome = ({ location, fullName }:CardWelcomeType)=>{
    return(
        <div className={styles.container}>
            <div className={styles.top}>

            </div>
            <div className={styles.body}>
                <h3>{fullName}</h3>
                <ul>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
            </div>
        </div>
    );
}

export default CardWelcome;