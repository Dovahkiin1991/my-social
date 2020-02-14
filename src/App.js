import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';
import {Route} from "react-router-dom";

const App = (props) => {
  return (
      <div className="wrapper">
          <Topbar />
          <Header />
          <Navbar state={props.state} />
          <div className="wrapper-content">
              <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagesPage}
                     dispatch={props.dispatch} /> } />
              <Route path='/profile' render={ () => <Profile state={props.state.profilePage}
                    dispatch={props.dispatch} /> } />
          </div>
      </div>
  );
}


export default App;
