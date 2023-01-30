import { useState } from "react";
import { ElementFilterBtnType, ArrFilterKeys } from "../../types/ElementFilterBtnType";

import styles from "./styles.module.scss";

const ElementFilterBtn = ({ onClick }: ElementFilterBtnType)=>{
    const initialStateBtns = {
        all: true,
        ts: false,
        js: false,
        html: false,
        css: false,
        scss: false
    };
    const [ active, setActive ] = useState<ArrFilterKeys>(initialStateBtns);

    function handleClick(key: string){
        let auxArrKeyBtns = {
            all: false,
            ts: false,
            js: false,
            html: false,
            css: false,
            scss: false
        };
        onClick(key);
        switch(key){
            case "css":
                auxArrKeyBtns.css = true;
                setActive(auxArrKeyBtns);
            break;
            case "scss":
                auxArrKeyBtns.scss = true;
                setActive(auxArrKeyBtns);
            break;
            case "ts":
                auxArrKeyBtns.ts = true;
                setActive(auxArrKeyBtns);
            break;
            case "js":
                auxArrKeyBtns.js = true;
                setActive(auxArrKeyBtns);
            break;
            case "html":
                auxArrKeyBtns.html = true;
                setActive(auxArrKeyBtns);
            break;
            case "all":
                auxArrKeyBtns.all = true;
                setActive(auxArrKeyBtns);
            break;
        }
    }

    return (
        <>
            <li 
                onClick={()=>handleClick("all")}
                className={ active.all ? styles.active : styles.none }
            >
                <span>todos</span>
            </li>
            <li 
                onClick={()=>handleClick("ts")}
                className={ active.ts ? styles.active : styles.none }
            >
                <span>typescript</span>
            </li>
            <li 
                onClick={()=>handleClick("js")}
                className={ active.js ? styles.active : styles.none }
            >
                <span>javascript</span>
            </li>
            <li 
                onClick={()=>handleClick("css")}
                className={ active.css ? styles.active : styles.none }
            >
                <span>css</span>
            </li>
            <li 
                onClick={()=>handleClick("html")}
                className={ active.html ? styles.active : styles.none }
            >
                <span>html</span>
            </li>
            <li 
                onClick={()=>handleClick("scss")}
                className={ active.scss ? styles.active : styles.none }
            >
                <span>scss</span>
            </li>
        </>
    );
}

export default ElementFilterBtn;