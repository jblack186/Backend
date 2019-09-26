import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import {Route} from 'react-router-dom';
import Vacations from './Vacations';
import PostVacation from './PostVacation';
import VacationPage from './VacationPage';
import axios from 'axios';
import TravForm from './TravForm';
import Messenger from './Messenger';
import MessagePage from './MessagePage';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      vacations: [],

    }
  }
    componentDidMount(){
      const token = localStorage.getItem('token')
      axios
      .get('https://vacation-planner-bw.herokuapp.com/api/vacations', { 'headers': {'Authorization': token}})
          .then(res => {
              this.setState(() => ({vacations: res.data}))
              console.log(res)
          })
          .catch(err => {
              console.log(err)
          })

        }
  render() {  
    console.log(this.state.vacations)
  return (
    <div className="App">
          {/* <Route exact path='/form' component={ TravForm } /> */}

      <Route exact path='/register' component={ Register } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/vacations' render= {(props) => { return <Vacations {...props} vacations={this.state.vacations}/>} } />
      <Route exact path='/postvacation' component={ PostVacation } />
      <Route exact path='/vacationpage/:id' render= {(props) => { return <VacationPage {...props} vacations={this.state.vacations}/>} } />
      <Route exact path='/messenger/:id' render= {(props) => { return <Messenger {...props} vacations={this.state.vacations}/>} } />
      <Route exact path='/messengerpage/:id' render= {(props) => { return <MessagePage {...props} vacations={this.state.vacations}/>} } />

    </div>
  );
}
    }
export default App;
