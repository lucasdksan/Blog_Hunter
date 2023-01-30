import { ExperiencesType } from "../../types/ExperiencesType";

import styles from "./styles.module.scss";

const ExperiencesCard = (element: ExperiencesType)=>{
    let stringYear;

    if(element.temp > 1){
        stringYear = `${element.temp} anos`;
    } else {
        stringYear = `${element.temp} ano`
    }

    return(
        <div className={styles.container}>
            <div className={styles.containerDate}>
                <span className={styles.date}>
                    {element.year}
                    <em className={styles.line}></em>
                </span>
                <span className={styles.containerTemp}>
                    {stringYear}
                    <em className={styles.line}></em>
                </span>
            </div>
            <div className={styles.containerDescription}>
                <span className={styles.title}>{element.name}</span>
                <p className={styles.description}>{element.description}</p>
            </div>
            <div className={styles.containerExtra}>
                <span>{element.type}</span>
                <div className={styles.first}>
                    {
                        element.technologies.map((tech, key)=>(
                            <span 
                                key={key}
                                className={styles.card}
                            >{tech}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ExperiencesCard;