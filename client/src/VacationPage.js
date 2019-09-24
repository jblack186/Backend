import React from 'react';
import axios from 'axios';

export default class VacationPage extends React.Component {
    constructor(props){
        super(props)
    }


            
    

    render() {
        const vacation = this.props.vacations.find(i => String(i.id) === this.props.match.params.id)
console.log(vacation)
if (!vacation) {
    return <div>Loading...</div>
}
        return (
            <div>
                <p>{vacation.username}</p>
                <p>{vacation.destination}</p>
                <p>{vacation.description}</p>
            </div>
        )
    }
}