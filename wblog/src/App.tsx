import React, { Suspense } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Form from './Component/Form';
import Loading from './Component/Loading';
import Survey  from './Component/Survey';

const OtherForm = React.lazy(()=> import ('./Component/Form'));

function App() {
  return (
    <div >

    <Navigation/>

    <Switch>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Home" component={Home}></Route>
        <Route path='/Survey' component={Survey}></Route>
        <Suspense  fallback={<Loading/> }>
          
          <Route path="/Form" component={OtherForm}></Route>
        </Suspense>

    </Switch>


    </div>
  );
}

export default App;
