import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';


export default class NavBar extends React.Component{
    constructor(){
        super()
        this.state = {
            user: localStorage.getItem('user')
        }
    }

    render(){
        console.log(this.state.user)

    return (
        <div className='navs'>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">SlayVacay</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <Nav.Link href="#link">Link</Nav.Link>

                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                    </Nav>
                    <div className='user-guest'>
                    {this.state.user ? <p className='user'>{this.state.user}</p> : <div className='guest'> <p>guest</p> <p>/</p> <Link exact to={'/register'}><p>Register</p></Link></div>}

                    </div>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button type='submit' variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
    }
}