import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Rounter/Home";
import About from "../Rounter/About";
import Login from "../Rounter/Login";
import NavBar from "../Rounter/NavBar";

import Header from "./Header";
import NoteContainer from "./NoteContainer";

function App() {
  return (
    <div className="app">
            <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
      <Header />
      <NoteContainer />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
