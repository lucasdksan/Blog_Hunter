import { SkillProps } from "../../types/SkillType";

import styles from "./styles.module.scss";

const SkillCards = ({ name, src }: SkillProps)=>{
    return(
        <div className={styles.container}>
            <img src={src} alt="image skill" />
            <em>{name}</em>
        </div>
    );
}

export default SkillCards;