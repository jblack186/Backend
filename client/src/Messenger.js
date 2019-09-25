import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Messenger extends React.Component {
    constructor(){
        super()
        this.state = {
            messages: '',
            post: '',
            userId: localStorage.getItem('id'),
            users: []
        }
    }

post = (e) => {
    e.preventDefault();
    const {post, } = this.state
        axios
        .post('https://vacation-planner-bw.herokuapp.com/api/vacations/comments', {post})
            .then(res => {
                console.log(res)
                this.setState({comment: ''})


            })
            .catch(err => {
                console.log(err)
            })
         
}

changeHandler = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
}   

// componentDidMount = () => {
//     const id = this.props.match.params.id
//     axios
//     .get(`https://vacation-planner-bw.herokuapp.com/api/vacations/comments/${id}`)
//     .then(res => {
//         this.setState({messages: res.data})
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

componentDidMount = () => {
    const id = this.props.match.params.id
    const token = localStorage.getItem('token')
    axios
    .get('https://vacation-planner-bw.herokuapp.com/api/users', { 'headers': {'Authorization': token}})
    .then(res => {
        this.setState({users: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}


    render(){
        console.log(this.state.users)
        console.log(this.state.messages)
        console.log(this.props)
        if (!this.state.users) {
          return  <p>Loading...</p>
        }
        return (
            <div>
                {this.state.users.map(user => {
                    return <Link><p>{user.username}</p></Link>
                })}
                <form onSubmit={this.post}>
                    <input 
                        placeholder='enter post'
                        value={this.state.post}
                        name='post'
                        onChange={this.changeHandler}
                    />
                    <button type='submit'>Post</button>
                </form>
            </div>
        )
    }
}