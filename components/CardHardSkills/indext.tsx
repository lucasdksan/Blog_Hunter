import { CardHardSkills } from "../../types/CardHardSkillsType";

import styles from "./styles.module.scss";

const CardHardSkills = ({ icon, label }: CardHardSkills)=>{
    return (
        <div className={styles.container}>
            <span className={styles.label}>{label}</span>
            <div className={styles.containerIcon}>
                {icon}
            </div>
        </div>
    );
}

export default CardHardSkills;