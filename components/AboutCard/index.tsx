import Image from "next/image";
import { dateObj } from "../../libs/dateObj";

import styles from "./styles.module.scss";

const AboutCard = ()=>{
    const  { getAge } = dateObj;
    
    function MyYear(){
        return `${getAge("1998/11/07")}`;
    }

    return (
        <div className={styles.container}>
            <div className={styles.topHeader}>
                <div className={styles.contentIcons}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/lucasdksan">
                        <Image 
                            src="/assets/git.png" 
                            alt="X icon" 
                            width={30}
                            height={30}
                            className={styles.xicon}
                        />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lucas_sil_leo/">
                        <Image 
                            src="/assets/insta.png" 
                            alt="X icon" 
                            width={30}
                            height={30}
                            className={styles.xicon}
                        />
                    </a>
                    <a target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/lucas-silva-464b45164/">
                        <Image 
                            src="/assets/linkedin.png" 
                            alt="X icon" 
                            width={30}
                            height={30}
                            className={styles.xicon}
                        />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Lucasda24527132">
                        <Image 
                            src="/assets/twitter.png" 
                            alt="X icon" 
                            width={30}
                            height={30}
                            className={styles.xicon}
                        />
                    </a>
                </div>
            </div>
            <ul className={styles.listContainer}>
                <li><em>Eu nasci no Ceará</em></li>
                <li><em>Eu tenho {MyYear()} anos</em></li>
                <li><em>Comecei a trabalhar no ramo de desenvolvimento em 2020</em></li>
                <li><em>Sou desenvolvedor Front End, Back End e IoT</em></li>
                <li><em>Atualmente moro no Rio Grande do Norte</em></li>
            </ul>
            <div></div>
        </div>
    );
}

export default AboutCard;