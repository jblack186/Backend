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
        console.log(this.props)
        console.log(this.state.messages)
        return (
            <div>
                
            </div>
        )
    }
}