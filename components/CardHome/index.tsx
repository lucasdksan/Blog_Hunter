import Image from "next/image";

import { CardHomeType } from "../../types/CardHomeType";

import styles from "./styles.module.scss";

const CardHome = ({ link, urlGit }:CardHomeType)=>{
    return(
        <div className={styles.container}>
            <Image 
                src="/assets/+.png" 
                alt="X icon" 
                width={88}
                height={88}
                className={styles.xicon}
            />
            <div className={styles.content}>
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
                        <a target="_blank" href="/documents/Lucas_2.pdf" download>Curriculo</a>
                    </div>
                </div>
            </div>
            <Image 
                src="/assets/Ellipse.png" 
                alt="Circle Icon" 
                width={88}
                height={88}
                className={styles.cicon}
            />
        </div>
    );
}

export default CardHome;