import { CardRepoType } from "../../types/CardRepoType";

import styles from "./styles.module.scss";

const CardRepo = ({ link, name, type }: CardRepoType)=>{
    return(
        <div className={styles.container}>
            <strong>{name}</strong>
            <div className={styles.contentBtn}>
                <em>{type}</em>
                <a target="_blank" href={link}>Visualizar</a>
            </div>
        </div>
    );
}

export default CardRepo;