import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Form from './Component/Form';

function App() {
  return (
    <div >

    <Navigation/>

    <Switch>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Form" component={Form}></Route>
        <Route path="/Home" component={Home}></Route>

    </Switch>


    </div>
  );
}

export default App;
