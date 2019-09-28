import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import BoardWalk from './img/khachik-simonian-nXOB-wh4Oyc-unsplash (1).jpg';
import {Button, Image, fluid} from 'react-bootstrap';
import './Vacations.css';
import $ from 'jquery';
import ReactImageMagnify from 'react-image-magnify';

export default class Vacations extends React.Component {
constructor(props) {
super(props)
this.state = {
    vacations: props.vacations,
    user: localStorage.getItem('user'),
    id: localStorage.getItem('id'),
    active: false,
}

}

    componentDidMount(){

        $('')

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

   
    hover = () => {
        this.setState({active: true});
    }

    render(){ 
        const url = "https://unsplash.com/photos/cfQEO_1S0Rs";
      
        const id = this.props.vacations.id
        const vacation = this.props.vacations.find(i => String(i.id) === this.props.match.params.id)
        const userId = this.state.id
        console.log(userId)
        return (
            <div>
                
        <NavBar />
                <div className='vacation-content-container'>
                    {this.props.vacations.map(vac => {
                    return  <div>
                    <div onMouseOver={this.hover} className='vacation-content'>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} exact to ={`/vacationpage/${vac.id}`}>
                            <img className='vacation-img' src={ BoardWalk }/>
                            <div>
                            <p>{vac.destination}</p> 
                            <p>${vac.cost}</p>
                            <p>{vac.description}Lorem ipsum dolor sit amet, duo at nominati principes, falli muner ipsum dolor sit amet, duo at nominati principes, falli muner</p>
                            <p>{vac.start_date}</p>
                            </div>
                        </Link>
                    </div>
                    </div>
                    })}
                </div>
            </div>
        )
    }
                }