import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Vacations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vacations: props.vacations,
            user: localStorage.getItem('user'),
            id: localStorage.getItem('id')
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
        console.log(this.props.vacation)
        if(this.props.vacations) {
            return <p>Loading...</p>
        } else {
        const id = this.props.vacations.id
        const vacation = this.props.vacations.find(i => String(i.id) === this.props.match.params.id)
        }
        const userId = this.state.id
        console.log(userId)
        return (
            <div>
                <Link exact to={`/messenger/${userId}`} ><h2>{this.state.user}</h2></Link>
                {this.props.vacations.map(vac => {
                  return <Link exact to ={`/vacationpage/${vac.id}`}> 
                  
                  <p>{vac.destination}</p> </Link>
                })}
    
            </div>
        )
    }
                }