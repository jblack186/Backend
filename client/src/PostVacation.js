import React, {Component} from 'react';
import axios from 'axios';
import { isInteger } from 'formik';

export default class PostVacation extends React.Component {
    constructor() {
        super()
        this.state = {
                destination: '',
                start_date: '',
                end_date: '',
                cost: '',
                activities: '',
                user_id: '',
                activity: '',
                description: '',
                file: ''
                
        }
    }

    componentDidMount() {
        this.setState({user_id: Number(localStorage.getItem('id'))})
        
    }
 

    addVacation = (e) => {
        e.preventDefault();
        const { destination, user_id, start_date, end_date, cost, activities, description} = this.state

        axios
        .post('https://vacation-planner-bw.herokuapp.com/api/vacations', {destination, user_id, start_date, end_date, cost, activities, description} )
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

   activity = (e, newActivity) => {
       e.preventDefault();
       const {activity} = this.state
       newActivity = activity
       this.setState({activities: this.state.activities.concat(newActivity)})
       
       
   }

    render(){
        
       

        return (
            <div>
                <p>{this.state.activities}</p>
                <h1>{localStorage.getItem('user')}</h1>
               
                <form onSubmit={this.addVacation}>
                
                    <input
                        placeholder='destination'
                        value={this.state.destination}
                        onChange={this.changeHandler}
                        name='destination'
                    />

              
                    <input
                        placeholder='start_date'
                        value={this.state.start_date}
                        onChange={this.changeHandler}
                        name='start_date'
                    />
                    <input
                        placeholder='end_date'
                        value={this.state.end_date}
                        onChange={this.changeHandler}
                        name='end_date'
                    />
                    <input
                        placeholder='activity'
                        value={this.state.activity}
                        onChange={this.changeHandler}
                        name='activity'

                    />

                    <input
                        placeholder='cost'
                        value={this.state.cost}
                        onChange={this.changeHandler}
                        name='cost'
                        
                    />
                    <input
                        placeholder='description'
                        value={this.state.description}
                        onChange={this.changeHandler}
                        name='description'
                    />
                    <input
                    placeholder='choose picture'
                    value={this.state.file}
                    onChange={this.changeHandler}
                    type='file'
                    />
                    <button type='submit'>Add</button>
                </form>
                <button onClick={this.activity}>push</button>
            </div>
        )
    }
}