import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Switch} from "react-router-dom";
import Search from "./Components/Search";
import Favorites from "./Components/Favorites";

function App() {
  return (
    <div className="container App">
      <Nav />
        <Switch>
            <Route path="/" exact>
                <Search/>
            </Route>
            <Route path='/favs'>
                <Favorites/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;