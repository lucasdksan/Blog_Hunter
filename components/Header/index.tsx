import styles from "./styles.module.scss";

const Header = ()=>{
    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;