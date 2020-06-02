import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
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
              <Route path='/dialogs' render={ () => <DialogsContainer /> } />
              <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
              <Route path='/users' render={ () => <UsersContainer />  } />
          </div>
      </div>
  );
}


export default App;
