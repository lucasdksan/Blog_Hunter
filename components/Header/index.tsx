import useMyNavigation from "../../libs/useMyNavigation";
import styles from "./styles.module.scss";

const Header = ()=>{
    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><a onClick={()=>useMyNavigation("home")}>Home</a></li>
                    <li><a onClick={()=>useMyNavigation("projects")}>Projetos</a></li>
                    <li><a onClick={()=>useMyNavigation("about")}>Sobre</a></li>
                    <li><a onClick={()=>useMyNavigation("hard-skills")}>Hard Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;