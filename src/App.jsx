import React, {useState, useContext} from 'react'
import Switch from 'react-switch'
import styled, { ThemeProvider}  from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from './themes'

const StyledApp = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${(props) => props.theme.headerColor};
`

export default function App(props) {
    const [theme , setTheme] = useState("light")

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
                <h1>Hello World</h1>
                <Switch
                    className="switch"
                    onChange={themeToggler}
                    checked={theme === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={30}
                    offColor={theme === 'light' ? lightTheme.switch : darkTheme.switch}
                    onColor={theme === 'light' ? lightTheme.switch : darkTheme.switch}
                />
            </StyledApp>
        </ThemeProvider>
    )
}