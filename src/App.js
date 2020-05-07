import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';
import {Route} from "react-router-dom";

const App = (props) => {
  return (
      <div className="wrapper">
          <Topbar />
          <Header />
          <Navbar state={props.state} />
          <div className="wrapper-content">
              <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} /> } />
              <Route path='/profile' render={ () => <Profile store={props.store} /> } />
          </div>
      </div>
  );
}


export default App;
