import { ElementFilterBtnType } from "../../types/ElementFilterBtnType";

const ElementFilterBtn = ({ name, onClick }: ElementFilterBtnType)=>{
    return (
        <li onClick={()=>onClick(name)}>
            <span>{name}</span>
        </li>
    );
}

export default ElementFilterBtn;