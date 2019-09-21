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
        .get('https://vacation-planner-bw.herokuapp.com/api/vacations')
            .then(res => {
                this.setState(() => ({vacations: res.data}))
            })
            .catch(err => {
                console.log(err)
            })

    }
    render(){
        console.log(this.state.vacations)
        return (
            <div>
                {/* {this.state.vacations.map(vac => {
                  return  <p>{vac.destination}</p>
                })} */}
            </div>
        )
    }
}