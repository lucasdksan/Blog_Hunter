import { SkillProps } from "../../types/SkillType";

import styles from "./styles.module.scss";

const SkillCards = ({ name, src, tablet }: SkillProps)=>{
    return(
        <div 
            className={styles.container}
            style={{
                margin: tablet ? "0px" : "0px 15px"
            }}
        >
            <img src={src} alt="image skill" />
            <em>{name}</em>
        </div>
    );
}

export default SkillCards;