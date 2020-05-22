import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
//components to import 
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/' style={{margin: '0 20px'}}>Login</Link>
          <Link to='/protected' style={{margin: '0 20px'}}>Protected Page</Link>
        </nav>
      </header>
      <Route exact path='/'>
        <Login/>
      </Route>
      <PrivateRoute exact path='/protected' component={Friends}/>
    </div>
  );
}

export default App;
