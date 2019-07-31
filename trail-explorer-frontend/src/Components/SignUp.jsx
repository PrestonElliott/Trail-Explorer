import React, { Component } from "react"
import { connect } from 'react-redux'
import { Form, FormInput, FormGroup } from "shards-react"
import { Modal, Button } from "react-bootstrap"

class SignUp extends Component {

    handleSignUp = (e) => {
        e.preventDefault()
        if(e.target.name.value && e.target.email.value && e.target.password.value) {
            fetch('http://localhost:3000/users',{
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type':'application/json' },
                body: JSON.stringify({
                    user: {
                        name: e.target.name.value,
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
            })
        }
    
    }

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <h3>Sign Up Form</h3>
                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={(e) => this.handleSignUp(e)}>
                    
                        <FormGroup>
                            <label htmlFor="#name">Name</label>
                            <FormInput type="name" name="name" id="#name" placeholder="Name" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="#email">Email</label>
                            <FormInput type="email" name="email" id="#email" placeholder="Email" />
                        </FormGroup>
                        
                        <FormGroup>
                            <label htmlFor="#password">Password</label>
                            <FormInput name="password" type="password" id="#password" placeholder="Password" />
                            <Button type="submit"> Submit </Button><br/>
                        </FormGroup>
                    </Form>
                    
                </Modal.Body>

            </Modal.Dialog>
        )
    }
}

export default connect()(SignUp)