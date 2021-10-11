import { createGlobalStyle } from 'styled-components';
import themes from './colors/themes';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        padding: 0px;
        width: auto;
    }
    body::-webkit-scrollbar{
        width: 5px;
        background-color: ${themes.colors.main_sub_black_2};
    }
    body::-webkit-scrollbar-thumb{
        background: ${themes.colors.main_sub_gray};
    }
    #root{
        width: 100%;
        height: 100%;
    }
`;