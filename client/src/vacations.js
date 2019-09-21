import React, {Component} from 'react';
import axios from 'axios';

export default class Vacations extends React.Component {
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



    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

   

    render(){
    

        return (
            <div>
                {this.state.vacations.map(vac => {
                  return <p>{vac.destination}</p>
                })}
    
            </div>
        )
    }
}