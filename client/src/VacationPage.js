import React from 'react';
import axios from 'axios';
import './Vacations.css';
import {Link} from 'react-router-dom';

export default class VacationPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comment: '',
            comments: [],
            loading: false,
           vacations_id: Number(this.props.match.params.id)
        }
    }


    componentDidMount(){
        
        const token = localStorage.getItem('token')
        axios
        .get('https://vacation-planner-bw.herokuapp.com/api/vacations/comments')
            .then(res => {
                this.setState({comments: res.data})
            })
            .catch(err => {
                console.log(err)
            })
            
    }

     
    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }   
    
    addComment = (e) => {
        e.preventDefault();
       
        const {comment, vacations_id} = this.state
        axios
        .post('https://vacation-planner-bw.herokuapp.com/api/vacations/comments', {comment, vacations_id})
            .then(res => {
                console.log(res)
                this.setState({comment: ''})


            })
            .catch(err => {
                console.log(err)
            })
         
    }


    refresh = () => {
        const token = localStorage.getItem('token')
        axios
        .get('https://vacation-planner-bw.herokuapp.com/api/vacations/comments')
            .then(res => {
                this.setState({comments: res.data})
                this.setState({loading: true})
                // window.location.onChange('false');
            })
            .catch(err => {
                console.log(err)
            })
 
    }

    render() {
        const vacation = this.props.vacations.find(i => {
            return String(i.id) === this.props.match.params.id})
        const commentz = this.state.comments.filter(i => {
            return String(i.vacations_id) === this.props.match.params.id})
    

if (!vacation) {
    return <div>...</div>
}


        return (
            <div>
                
                <p>{vacation.destination}</p>
                <p>{vacation.description}</p>
                <img src='' />
                <form onSubmit={this.addComment}>
                    <input 
                        onKeyPress={this.refresh}
                        placeholder='comment'
                        value={this.state.comment}
                        onChange={this.changeHandler}
                        name='comment'

                    />
                    <button onClick={this.refresh} onMouseLeave={this.refresh} type='submit'>Add</button>
                </form>
                <p>posted by <Link exact to={`/user/${vacation.user_id}`}>{vacation.username}</Link></p>
                { commentz ? commentz.map(comment => { 
                  return  <p>{comment.comment}</p> 
                }) : null}
              

            </div>
        )
    }
}