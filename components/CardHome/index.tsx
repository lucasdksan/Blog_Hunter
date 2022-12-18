import styles from "./styles.module.scss";

const CardHome = ()=>{
    return(
        <div className={styles.container}>
            <div className={styles.left}></div>
            <div className={styles.right}>
                <h1>
                    Olá, me chamo <strong>Lucas da Silva</strong>
                </h1>
                <p>
                    Sou desenvolvedor Full Stack, apaixonado por tecnologias de desenvolvimento.
                </p>
                <div className={styles.btnArea}>
                    <a href="https://github.com/lucasdksan">Github</a>
                    <a href="">Curriculo</a>
                </div>
            </div>
        </div>
    );
}

export default CardHome;