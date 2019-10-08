import React, { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import BoardWalk from './img/khachik-simonian-nXOB-wh4Oyc-unsplash.jpg';
import {ButtonToolbar, DropdownButton, Dropdown} from 'react-bootstrap';
import './Vacations.css';
import FileUpload from './FileUpload';

export default class vacations extends React.Component {
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
        console.log(this.props.vacations)

        return (
            <Fragment>        
                <NavBar />
                <div className='container'>
                <FileUpload />       
                </div>
                <div className='vacation-content-container'>
                        {this.props.vacations.map(vac => {
                        return  <div>
                        <div onMouseOver={this.hover} className='vacation-content'>
                            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} exact to ={`/vacationpage/${vac.id}`}>
                                <img className='vacation-img' alt='just becuz' src={ vac.img }/> 
                                <div>
                                <p>{vac.destination}</p> 
                                <p>${vac.cost}</p>
                                <p>{vac.description}</p>
                                <p>{vac.start_date}</p>
                                </div>
                            </Link>
                        </div>
                        </div>
                        })}
                </div>
            </Fragment>
        )
    }
                }