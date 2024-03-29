import Image from "next/image";
import { dateObj } from "../../libs/dateObj";
import myNavigation from "../../libs/myNavigation";

import styles from "./styles.module.scss";

const Footer = () => {
    const { currentDate } = dateObj;
    
    return (
        <footer className={styles.footerContainer}>
            <section className={styles.top}>
                <div className={styles.contentIcon}>
                    <em>Lucas da Silva Leoncio</em>
                </div>
                <div className={styles.navContent}>
                    <span>Navegação</span>
                    <ul>
                        <li><a onClick={()=>myNavigation("home")}>Home</a></li>
                        <li><a onClick={()=>myNavigation("projects")}>Projetos</a></li>
                        <li><a onClick={()=>myNavigation("about")}>Sobre</a></li>
                        <li><a onClick={()=>myNavigation("experiences")}>Experiências</a></li>
                        <li><a onClick={()=>myNavigation("hard-skills")}>Hard Skills</a></li>
                    </ul>
                </div>
                <div className={styles.network}>
                    <a target="_blank" href="https://github.com/lucasdksan" rel="noopener noreferrer">
                        <Image
                            src="/assets/git.png"
                            alt="X icon"
                            width={30}
                            height={30}
                            className={styles.xicon}
                        />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/lucas_sil_leo/" rel="noopener noreferrer">
                        <Image
                            src="/assets/insta.png"
                            alt="X icon"
                            width={30}
                            height={30}
                            className={styles.xicon}
                        />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/lucas-silva-464b45164/" rel="noopener noreferrer">
                        <Image
                            src="/assets/linkedin.png"
                            alt="X icon"
                            width={30}
                            height={30}
                            className={styles.xicon}
                        />
                    </a>
                    <a target="_blank" href="https://twitter.com/Lucasda24527132" rel="noopener noreferrer">
                        <Image
                            src="/assets/twitter.png"
                            alt="X icon"
                            width={30}
                            height={30}
                            className={styles.xicon}
                        />
                    </a>
                </div>
            </section>
            <section className={styles.midler}>
                <q cite="https://www.pensador.com/autor/david_ribeiro_guilherme/">Não é a linguagem de programação que define o programador, mas sim sua lógica.</q>
            </section>
            <section className={styles.bottom}>
                <p>&#169; Todos os direitos reservados {currentDate()}.</p>
            </section>
        </footer>
    );
}

export default Footer;