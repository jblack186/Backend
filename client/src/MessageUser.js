import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class MessageUser extends React.Component {
    constructor() {
        super()
        this.state = {
            message: [],
            user: localStorage.getItem('user')

        }
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

    render() {
        console.log(this.props)
        console.log(this.state.user)
        return (
            <div>
                <NavBar />
                {this.state.message.map(message => {
                   return <div>              
                    <p>{this.state.user}</p><p>{message.message}</p>
                   </div> 
                })}
            </div>
        )
    }
}