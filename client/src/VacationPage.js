import React from 'react';
import axios from 'axios';

export default class VacationPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comment: '',
            comments: [],
            loading: false,
           vacations_id: Number(this.props.match.params.id)
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
        this.setState({loading: true})
        const {comment, vacations_id} = this.state
        axios
        .post('https://vacation-planner-bw.herokuapp.com/api/vacations/comments', {comment, vacations_id})
            .then(res => {
                console.log(res)
                this.setState({loading: false})

            })
            .catch(err => {
                console.log(err)
            })
         
    }

    render() {
        console.log(this.props.vacations)
        const vacation = this.props.vacations.find(i => String(i.id) === this.props.match.params.id)
        const comment = this.state.comments.filter(i => {
            return String(i.vacations_id) === this.props.match.params.id})
    
        const arr = []
        arr.push(comment)
console.log(vacation)
console.log(this.state.comments.vacations_id)

if (!vacation) {
    return <div>Loading...</div>
}
if (!comment) {
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
                {arr.map(comment => {
                    return <p>{comment.comment}</p>
                })}
                {/* {this.state.comments.map(comment => {
                    console.log(comment.vacation_id)
                    {return comment.vacations_id === this.props.match.params.id ? <p>comment.comment</p> : null }
                })} */}

            </div>
        )
    }
}