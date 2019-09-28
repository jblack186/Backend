import React, {Component} from 'react';
import axios from 'axios';
import { Dropdown, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        console.log(this.state)
       
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    login = (e) => {
        
        e.preventDefault();
        axios.post(`https://vacation-planner-bw.herokuapp.com/api/users/login`, this.state)
        .then(response => {
            
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', response.data.message)
localStorage.setItem('id', response.data.user_id)
console.log(response)
this.props.history.push('/vacations')
})
        .catch(error => {
            console.log(error)
        })
      
    }
    

    

    render() {
        console.log(this.props)
        return (
            <div>
                <Dropdown className='form-dropdown'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Login
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <form onSubmit={this.login} className='form'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className='form-text'>Email address</Form.Label>
                                <Form.Control onChange={this.changeHandler} name='username' type="username" placeholder="Enter username" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='form-text'>Password</Form.Label>
                                <Form.Control onChange={this.changeHandler} name='password' type="username" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check className='form-text' type="checkbox" label="Check me out" />
                            </Form.Group>
                            <div className='button'>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                        </Dropdown.Menu>
                    </Dropdown>
               
            </div>
        )
    }
}

export default withRouter(Login);