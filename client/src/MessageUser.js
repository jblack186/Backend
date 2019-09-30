import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import './MessageUser.css';

export default class MessageUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: [],
            user: localStorage.getItem('user'),
            token: this.props.token,
            users: [],
            verifiedUser: []
            
        }
        console.log('props', this.props)
    }

   componentDidMount() {
       
        const user_id = this.props.match.params.id
        axios
        .get(`https://vacation-planner-bw.herokuapp.com/api/users/messages/${user_id}`)
        .then(res => {
          this.setState({message: res.data})
                        console.log(res)

        })
        .catch(err => {
            console.log(err)
        })

     
        
        
    }

    componentWillMount() {
        const token = localStorage.getItem('token')
        axios
        .get('https://vacation-planner-bw.herokuapp.com/api/users', { 'headers': {'Authorization': this.props.token}})
        .then(res => {
            this.setState(() => ({users: res.data}))
            console.log('res', res)
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    render() {
        console.log('this.props', this.props)
        console.log('messages', this.state.message)
        console.log('users', this.state.users)
        const verifiedUser = this.state.users.find(user => {
            return user.id === 1 && this.setState({verifiedUser: user.id})
        })

        console.log(this.state.verifiedUser)
         

        console.log(verifiedUser)
        return (  <div> 
           <NavBar />
            <div className='container'> 
            {!this.state.message ? <p>Loading...</p> : this.state.message.map(message => {
                   return <div>             
                    <span>{this.state.user}</span><p>{message.message}</p>
                   </div> 
                })}
                
            </div>
            </div>
        )
    }
}