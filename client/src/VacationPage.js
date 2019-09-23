import React from 'react';
import axios from 'axios';

export default class VacationPage extends React.Component {
    constructor(){
        super()
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
        return (
            <div>

            </div>
        )
    }
}