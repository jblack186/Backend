import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import {Route} from 'react-router-dom';
import vacations from './vacations';
import PostVacation from './PostVacation';
import VacationPage from './VacationPage';
import axios from 'axios';
import Messenger from './Messenger';
import MessagePage from './MessagePage';
import Home from './Home';
import MessageUser from './MessageUser';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      vacations: [],
      token: localStorage.getItem('token')

    }
  }
    componentDidMount(){
      const token = localStorage.getItem('token')
      axios
      .get('https://vacation-planner-bw.herokuapp.com/api/vacations', { 'headers': {'Authorization': token}})
          .then(res => {
           
              this.setState(() => ({vacations: res.data}))
             console.log('app-res', res)
          })
          
          .catch(err => {
              console.log(err)
          })
          

        }
  render() {  
  return (
    <div className="App">

      <Route exact path='/register' component={ Register } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/home' render= {(props) => { return <Home {...props} vacations={this.state.vacations}/>} } />
      <Route exact path='/vacations' render= {(props) => { return <vacations {...props} vacations={this.state.vacations}/>} } />
      <Route exact path='/postvacation' component={ PostVacation } />
      <Route exact path='/vacationpage/:id' render= {(props) => { return <VacationPage {...props} vacations={this.state.vacations}/>} } />
      <Route exact path='/messenger/:id' render= {(props) => { return <Messenger {...props} vacations={this.state.vacations}/>} } />
      <Route exact path='/messengerpage/:id' render= {(props) => { return <MessagePage {...props} vacations={this.state.vacations}/>} } />
      <Route exact path='/user/:id' render= {(props) => { return <MessageUser {...props} token={this.state.token} vacations={this.state.vacations}/>} } />

    </div>
  );
}
    }
export default App;
