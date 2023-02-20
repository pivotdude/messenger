import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Messages from "./pages/Messages/Messages";

function App() {
  return (
      <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path={''} element={<Messages />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
