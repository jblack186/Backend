import React, {Component} from 'react';
import axios from 'axios';

export default class PostVacation extends React.Component {
    constructor() {
        super()
        this.state = {
                destination: '',
                start_date: '',
                end_date: '',
                description: '',
                activities: '',
                comments: '',
                vacations_id: ''
        }
    }

    componentDidMount() {
        this.setState({vacations_id: Number(localStorage.getItem('id'))})
    }
 

    addVacationDestination = (e) => {
        
        const { destination, vacations_id} = this.state

        e.preventDefault();
        axios
        .post('https://vacation-planner-bw.herokuapp.com/api/vacations/destination', {destination, vacations_id})
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
        console.log(this.state.vacations_id)

        return (
            <div>
                <h1>{localStorage.getItem('user')}</h1>
               
                <form onSubmit={this.addVacation}>
                <form onSubmit={this.addVacationDestination}>
                    <input
                        placeholder='destination'
                        value={this.state.destination}
                        onChange={this.changeHandler}
                        name='destination'
                    />
                    <button type="submit">Add</button>
                </form>
                    <input
                        placeholder='start_date'
                        value={this.state.startt_date}
                        onChange={this.changeHandler}
                        name='start_date'
                    />
                    <input
                        placeholder='end_date'
                        value={this.state.endt_date}
                        onChange={this.changeHandler}
                        name='end_date'
                    />
                    <input
                        placeholder='activities'
                        value={this.state.activities}
                        onChange={this.changeHandler}
                        name='activities'
                    />
                    <input
                        placeholder='cost'
                        value={this.state.cost}
                        onChange={this.changeHandler}
                        name='cost'
                    />
                    <input
                        placeholder='comments'
                        value={this.state.comments}
                        onChange={this.changeHandler}
                        name='comments'
                    />
                  
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}