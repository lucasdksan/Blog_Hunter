import useMyNavigation from "../../libs/useMyNavigation";
import { MenuMobileType } from "../../types/MenuMobileType";

import styles from "./styles.module.scss";

const MenuMobile = ({ open }:MenuMobileType)=>{
    return(
        <div className={open ? styles.active: styles.close}>
            <ul>
                <li><a onClick={()=>useMyNavigation("home")}>Home</a></li>
                <li><a onClick={()=>useMyNavigation("projects")}>Projetos</a></li>
                <li><a onClick={()=>useMyNavigation("about")}>Sobre</a></li>
                <li><a onClick={()=>useMyNavigation("experiences")}>Experiências</a></li>
                <li><a onClick={()=>useMyNavigation("hard-skills")}>Hard Skills</a></li>
            </ul>
        </div>
    );
}

export default MenuMobile;