import React from 'react';
import Provider from './application/provider';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import ListPage from './pages/listPage';
import detailPage from './pages/detailPage';
import './assets/styles/main.css';

function App() {

  return (
    <main className='app'>   
      <Switch>
        <Provider>                
            <Route exact path="/" component={Header} />                         
            <Route exact path="/items/" component={ListPage} />
            <Route path="/items/:id" component={detailPage} />
        </Provider>
      </Switch>   
    </main> 
  );
  
}

export default App;
