import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className="wrapper">
              <Topbar />
              <Header />
              <Navbar />
              <div className="wrapper-content">
                  <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagesPage} /> } />
                  <Route path='/profile' render={ () => <Profile state={props.state.profilePage} /> } />
              </div>
          </div>
      </BrowserRouter>
  );
}


export default App;
