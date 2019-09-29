import React from 'react';
import axios from 'axios';

export default class MessageUser extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

   componentDidMount() {
        const user_id = 1
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
        console.log(this.state.message)
        return (
            <div>

            </div>
        )
    }
}