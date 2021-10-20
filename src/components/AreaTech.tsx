import React from "react";

import * as Component from "../styles/components/AreaTech"

const AreaTech:React.FC = ({ children })=>{
    return(
        <Component.Container>
            {
                children
            }
        </Component.Container>
    );
}

export default AreaTech;