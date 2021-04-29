import {createGlobalStyle} from 'styled-components'

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    headerColor: "#da5fff",
    switch: "#370d44",
}

export const darkTheme = {
    body: "#000",
    fontColor: "#fff",
    headerColor:"#370d44",
    switch: "#da5fff",
}

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body {
            background-color: ${(props) => props.theme.body};
            color: ${(props) => props.theme.fontColor};
        }
    
    .switch {
        margin: 20px;
    }
    h1{
        margin:20px;
    }

`