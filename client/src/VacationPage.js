import React from 'react';
import axios from 'axios';

export default class VacationPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comment: '',
            comments: '',
           user_id: Number(this.props.match.params.id)
        }
        console.log(this.props)
        console.log(this.props.match.params.id)
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
        const {comment, user_id} = this.state
        axios
        .post('https://vacation-planner-bw.herokuapp.com/api/vacations/comments', {comment, user_id})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
          
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
                <form onSubmit={this.addComment}>
                    <input 
                        placeholder='comment'
                        value={this.state.comment}
                        onChange={this.changeHandler}
                        name='comment'

                    />
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}