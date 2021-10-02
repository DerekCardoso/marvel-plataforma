import "./index.css";
import "./App.css";
import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

// import { ReactComponent as MenuIcon } 
// from "./img/menu.svg" 
import Logo from "./components/header";

import Filmes from "./pages/filmes";
import Personagens from "./pages/personagens"; 
import Hqs from "./pages/hqs";

function Main() {

    return (
      <HashRouter>

        <div>
          <div className="nav"> 
          <Logo />
          <ul className="header">
            {/* <li><NavLink exact to="/">Home</NavLink></li> */}
            <li><NavLink exact to="/">Personagens</NavLink></li>
            <li><NavLink to="/Filmes">Filmes</NavLink></li>
            <li><NavLink to="/Quadrinhos">HQs</NavLink></li>
          </ul>
          </div>
          <div className="content">
            {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/" component={Personagens}/>
            <Route path="/Filmes" component={Filmes}/>
            <Route path="/Quadrinhos" component={Hqs}/>
          </div>
        </div>
      </HashRouter>
    );
  }

export default Main;


