import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
        }
        console.log(this.state)
       
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    login = (e) => {
        e.preventDefault();
        axios.post(`https://vacation-planner-bw.herokuapp.com/api/users/login`, this.state)
        .then(response => {
           localStorage.setItem('token', response.data.token)
           localStorage.setItem('user', response.data.message)

           console.log(response.data.message)
           this.props.history.push('/vacations') 
        })
        .catch(error => {
            console.log(error)
        })
      
    }
    


    render() {
        console.log(this.state.user)
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                    onChange={this.changeHandler}
                    placeholder='username'
                    value={this.state.username}
                    name='username'
                    />
                    <input 
                    onChange={this.changeHandler}
                    placeholder='password'
                    value={this.state.password}
                    name='password'
                    />
                <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}