import React, {Component} from 'react';
import axios from 'axios';

export default class PostVacation extends React.Component {
    constructor() {
        super()
        this.state = {
                destination: '',
                date: '',
                description: '',
                comments: '',
                user_id: ''

        }

    }

 

    addVacation = (e) => {
        e.preventDefault();
        axios
        .post('https://vacation-planner-bw.herokuapp.com/api/vacations', this.state)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

   

    render(){
        console.log(this.state)
        return (
            <div>
               
                <form onSubmit={this.addVacation}>
              
                    <input
                        placeholder='destination'
                        value={this.state.destination}
                        onChange={this.changeHandler}
                        name='destination'
                    />
                    <input
                        placeholder='date'
                        value={this.state.date}
                        onChange={this.changeHandler}
                        name='date'
                    />
                    <input
                        placeholder='description'
                        value={this.state.description}
                        onChange={this.changeHandler}
                        name='description'
                    />
                    <input
                        placeholder='comments'
                        value={this.state.comments}
                        onChange={this.changeHandler}
                        name='comments'
                    />
                    <input
                        placeholder='user_id'
                        value={this.state.user_id}
                        onChange={this.changeHandler}
                        name='user_id'
                    />
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}