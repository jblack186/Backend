import React from 'react';
import NavBar from './NavBar';
import Vacay from './img/pedro-lastra-XlSgaYMWsZ8-unsplash.jpg';
import './Home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Login from './Login';

export default function Home(){
    return (
        <div>
             <NavBar />
             <div className='home-img-container'>
                <img className='home-img' src={Vacay} />
                <div className='home-img-text-search'>
                    <h2 className='home-img-text'>Choose with Confidence</h2>
                    <div className='home-input-button'>
                        <input className='home-search' placeholder='Enter a destination'/>
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                    <Login />
                </div>                
            </div>          
      </div>
    )
}