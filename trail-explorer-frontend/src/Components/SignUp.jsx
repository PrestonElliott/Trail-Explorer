import React from "react"
import { Form, FormInput, FormGroup } from "shards-react"
import { connect } from 'react-redux'

class SignUp extends React.Component {

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
                // else if(res.errors)
                //     this.setState({ errors: res.errors })
            })
            // e.target.password.value = ''
        }
    
    }

    render() {
        return (
            <Form onSubmit={(e) => this.handleSignUp(e)}>
                <h3>Sign Up Form</h3>

                <FormGroup>
                    <label htmlFor="#name">Name</label>
                    <FormInput name="name" id="#name" placeholder="Name" />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="#email">Email</label>
                    <FormInput name="email" id="#email" placeholder="Email" />
                </FormGroup>
                
                <FormGroup>
                    <label htmlFor="#password">Password</label>
                    <FormInput name="password" type="password" id="#password" placeholder="Password" />
                    <button type="submit">Submit</button>
                </FormGroup>
            </Form>
        )
    }
}

// let mapStateToProps = state => ({})
export default connect()(SignUp)