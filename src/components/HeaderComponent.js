import React, { useState } from 'react'
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isModelOpen, setIsModalOpen] = useState(false)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState("")

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    const toggleModal = () => {
        setIsModalOpen(!isModelOpen)
    }

    const handleLogin = (event) => {
        event.preventDefault();
        toggleModal()
        alert("Username: " + username.value + " Password: " + password.value
            + " Remember: " + remember.checked);

    }

    return (
        <React.Fragment>
            <Navbar dark expand="sm">
                <div className="container" >
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={toggleModal}>
                                    <span className='fa fa-sign-in fa-fg'>Login</span>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

            <Jumbotron>
                <div className="container">
                    <div className='row row-header justify-content-center'>
                        <div className="col-12 col-sm-6">
                            <h1>Restorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>

                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={isModelOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor='username'>Username</Label>
                            <Input type='text' id='username' name='username'
                                innerRef={(input) => setUsername(input)} />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor='password'>Password</Label>
                            <Input type='password' id='password' name='password'
                                innerRef={(input) => { setPassword(input) }} />
                        </FormGroup>

                        <FormGroup>
                            <Label check className='ml-4'>
                                <Input type='checkbox' name='remember'
                                    innerRef={(input) => { setRemember(input) }} />
                                Remember Me
                            </Label>
                        </FormGroup>

                        <FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}


export default HeaderComponent