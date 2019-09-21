import React, {Component} from 'react';
import axios from 'axios';

export default class Vacations extends React.Component {
    constructor() {
        super()
        this.state = {
            vacations: []
        }

    }

    componentDidMount(){
        axios
        .get('https://vacation-planner-bw.herokuapp.com/api/vacations', localStorage.getItem('token'))
            .then(res => {
                this.setState(() => ({vacations: res.data}))
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            
    }

    // componentWillUpdate(nextProps, nextState){
    //     localStorage.setItem('vacations', 'yep')
    // }

    render(){
        console.log(localStorage.getItem('token'))

        console.log(this.state.vacations)
        return (
            <div>
                {this.state.vacations.map(vac => {
                  return  <p>{vac.destination}</p>
                })}
            </div>
        )
    }
}