import { useState } from "react";

import myNavigation from "../../libs/myNavigation";
import styles from "./styles.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuMobile from "../MenuMobile";

const Header = () => {
    const [open, setOpen] = useState(false);

    function handlerOpenMenu() {
        setOpen(!open);
    }

    return (
        <>
            <header className={styles.header}>
                <nav className={open ? styles.active : ""}>
                    <ul>
                        <li><a onClick={() => myNavigation("home")}>Home</a></li>
                        <li><a onClick={() => myNavigation("projects")}>Projetos</a></li>
                        <li><a onClick={() => myNavigation("about")}>Sobre</a></li>
                        <li><a onClick={() => myNavigation("experiences")}>Experiências</a></li>
                        <li><a onClick={() => myNavigation("hard-skills")}>Hard Skills</a></li>
                    </ul>
                    <button
                        className={styles.openBtn}
                        onClick={handlerOpenMenu}
                    >
                        <GiHamburgerMenu />
                    </button>
                </nav>
                <button
                    className={styles.openBtn_mob}
                    onClick={handlerOpenMenu}
                >
                    <GiHamburgerMenu />
                </button>
            </header>
            <MenuMobile 
                open={open}
            />
        </>
    );
}

export default Header;