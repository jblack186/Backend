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
        console.log(this.state.comments)
        const vacation = this.state.comments.find(i => i.vacations_id = this.props.match.params.id)
        const commentz = this.state.comments.filter(i => {
            return String(i.vacations_id) === this.props.match.params.id})
    
console.log(commentz)
console.log(vacation)
console.log(this.state.comments.vacations_id)

if (!vacation) {
    return <div>...</div>
}
if (!commentz) {
    return <div>Hurry...</div>
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
                
                {commentz.map(comment => {
                  return <p>{comment.comment}</p>
                })}
               

            </div>
        )
    }
}