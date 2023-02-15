import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Message from "./pages/Message/Message";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
      <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path={''} element={<Message />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
