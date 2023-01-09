import { useState } from "react";

import useMyNavigation from "../../libs/useMyNavigation";
import styles from "./styles.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ()=>{
    const [ open, setOpen ] = useState(false);

    function handlerOpenMenu(){
        setOpen(!open);
    }

    return(
        <header className={styles.header}>
            <nav className={open ? styles.active: ""}>
                <ul>
                    <li><a onClick={()=>useMyNavigation("home")}>Home</a></li>
                    <li><a onClick={()=>useMyNavigation("projects")}>Projetos</a></li>
                    <li><a onClick={()=>useMyNavigation("about")}>Sobre</a></li>
                    <li><a onClick={()=>useMyNavigation("experiences")}>Experiências</a></li>
                    <li><a onClick={()=>useMyNavigation("hard-skills")}>Hard Skills</a></li>
                </ul>
                <button 
                    className={styles.openBtn}
                    onClick={handlerOpenMenu}
                >
                    <GiHamburgerMenu />
                </button>
            </nav>    
        </header>
    );
}

export default Header;