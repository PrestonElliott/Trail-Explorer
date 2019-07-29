import React from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { Form, FormInput, FormGroup } from "shards-react"
import { Modal, Button } from "react-bootstrap"

class Login extends React.Component {

    handleLogin = (e) => {
        e.preventDefault()
        if(e.target.email.value && e.target.password.value) {
            fetch('http://localhost:3000/login',{
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type':'application/json' },
                body: JSON.stringify({
                    user: {
                        email: e.target.email.value.toLowerCase(),
                        password: e.target.password.value
                    }
                })
            })
            .then(res => res.json())
            .then(res => {
                if(res.jwt) {
                    localStorage.setItem('token', res.jwt)
                    this.props.dispatch({ type: 'GET_USER', user: res.user })
                }
                // else if(res.errors)
                //     this.setState({ errors: res.errors })
            })
            // e.target.password.value = ''
        }
    }

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={(e) => this.handleLogin(e)}>
                        <h3>Login Form</h3>

                        <FormGroup>
                            <label htmlFor="#email">Email</label>
                            <FormInput name="email" id="#email" placeholder="Email" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="#password">Password</label>
                            <FormInput name="password" type="password" id="#password" placeholder="Password" />
                        </FormGroup>

                        <Button type="submit">Login</Button><br/>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Link to="/signup">
                        <Button> Create Your Account Today! </Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog> 
        )
    }
}

export default connect()(Login)