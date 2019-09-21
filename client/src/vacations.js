import React from 'react';
import axios from 'axios';

export default class Vacations extends React.Component {
    constructor() {
        super()
        this.state = {
            vacations: []
        }

    }

    componentDidMount() {
        axios.get('https://vacation-planner-bw.herokuapp.com/api/vacations')
            .then(res => {
                console.log(res)
                this.setState({vacations: res.data})
            })
            .catch(err => {
                console.log(err)
            })

    }
    render(){
        return (
            <div>
                {this.state.vacations.map(vac => {
                  return  <p>{vac.destination}</p>
                })}
            </div>
        )
    }
}