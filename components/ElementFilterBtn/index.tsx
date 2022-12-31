import { useState, useEffect } from "react";

import { ElementFilterBtnType } from "../../types/ElementFilterBtnType";

import styles from "./styles.module.scss";

const ElementFilterBtn = ({ name, onClick }: ElementFilterBtnType)=>{
    const [ active, setActive ] = useState(false);

    useEffect(()=>{
        if(name === "todos") {
            setActive(true);
        } else {
            setActive(false);
        }
    },[]);

    return (
        <li onClick={()=>onClick(name)} className={active ? styles.active : styles.none}>
            <span>{name}</span>
        </li>
    );
}

export default ElementFilterBtn;