import { CardHomeType } from "../../types/CardHomeType";
import styles from "./styles.module.scss";

const CardHome = ({ link, urlGit }:CardHomeType)=>{
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <span>
                    <img 
                        src={link} 
                        alt="Image User"
                        className={styles.userImage}
                    />
                </span>
            </div>
            <div className={styles.right}>
                <h1>
                    Olá, me chamo <strong>Lucas da Silva</strong>
                </h1>
                <p>
                    Sou desenvolvedor Full Stack, apaixonado por tecnologias de desenvolvimento.
                </p>
                <div className={styles.btnArea}>
                    <a className={styles.github} target="_blank" href={urlGit}>Github</a>
                    <a target="_blank" href="">Curriculo</a>
                </div>
            </div>
        </div>
    );
}

export default CardHome;