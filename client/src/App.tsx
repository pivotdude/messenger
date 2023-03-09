import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Messages from "./pages/Messages/Messages";
import {ThemeProvider, useTheme} from "styled-components";
import styled from "styled-components";
import {ThemesProps} from "./models";
import Registration from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";

const lightTheme = {
    colors: {
        bg: '#EEEEEE',
        fg: '#262626',
        primaryBg: '#F5F5F5',
        borderColor: '#EEEEEE'
    }
}
const darkTheme = {
    colors: {
        bg: '#262626',
        fg: '#FFFFFF',
        primaryBg: '#1E1E1E',
        borderColor: '#1E1E1E'
    }
}

const Content = styled.div<ThemesProps>`
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.colors.bg};
`

function App() {


  return (
      <BrowserRouter>
          <ThemeProvider theme={darkTheme}>
              <Content>

                  <Navigation />
                  <Routes>
                      <Route path={''} element={<Messages />} />
                      <Route path={'/login'} element={<Login />} />
                      <Route path={'/registration'} element={<Registration />} />
                  </Routes>

              </Content>
          </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
