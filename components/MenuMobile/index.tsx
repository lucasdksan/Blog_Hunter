import myNavigation from "../../libs/myNavigation";
import { MenuMobileType } from "../../types/MenuMobileType";

import styles from "./styles.module.scss";

const MenuMobile = ({ open }:MenuMobileType)=>{
    return(
        <div className={open ? styles.active: styles.close}>
            <ul>
                <li><a onClick={()=>myNavigation("home")}>Home</a></li>
                <li><a onClick={()=>myNavigation("projects")}>Projetos</a></li>
                <li><a onClick={()=>myNavigation("about")}>Sobre</a></li>
                <li><a onClick={()=>myNavigation("experiences")}>Experiências</a></li>
                <li><a onClick={()=>myNavigation("hard-skills")}>Hard Skills</a></li>
            </ul>
        </div>
    );
}

export default MenuMobile;