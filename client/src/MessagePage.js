import React from 'react';
import axios from 'axios';


export default class MessagePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            messages: ''
        }
    }

    componentDidMount(){
        
        const token = localStorage.getItem('token')
        axios
        .get('https://vacation-planner-bw.herokuapp.com/api/users/messages')
            .then(res => {
                this.setState({messages: res.data})
            })
            .catch(err => {
                console.log(err)
            })
            
    }

    render(){
        const id =
        console.log(this.props)
        console.log(this.state.messages)
        return (
            <div>
                
            </div>
        )
    }
}