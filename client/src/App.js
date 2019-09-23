import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import {Route} from 'react-router-dom';
import Vacations from './Vacations';
import PostVacation from './PostVacation';
import VacationPage from './VacationPage';

function App() {
  return (
    <div className="App">
      <Route exact path='/register' component={ Register } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/vacations' component={ Vacations } />
      <Route exact path='/postvacation' component={ PostVacation } />
      <Route exact path='/vacationpage' component={ VacationPage } />


    </div>
  );
}

export default App;
