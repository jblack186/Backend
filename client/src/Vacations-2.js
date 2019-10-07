import React, { Fragment, useState } from React;
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import BoardWalk from './img/khachik-simonian-nXOB-wh4Oyc-unsplash (1).jpg';
import {ButtonToolbar, DropdownButton, Dropdown} from 'react-bootstrap';
import './Vacations.css';

const FileUpload = () => {
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [destination, setDestination] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [cost, setCost] = useState('');
    const [activities, setActivities] = useState('');
    const [user_id, setUser_id] = useState('');
    const [activity, setActivity] = useState('');
    const [description, setDescription] = useState('');

}