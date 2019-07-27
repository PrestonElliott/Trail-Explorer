import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormInput, FormGroup } from "shards-react"
import { Modal, Button } from "react-bootstrap"

class EditProfile extends Component {

    handleEditProfile = (e) => {
        e.preventDefault()
        // console.log(e.target)
        if(e.target.email.value && e.target.currentPassword.value) {
            fetch(`http://localhost:3000/users/{this.props.user.id}`, {
                method: "PATCH",
                headers: {Accept: 'application/json', 'Content-Type':'application/json'},
                body: JSON.stringify({
                    user: {
                        password: e.target.password.value
                    }
                })
            })
            .then(res => res.json())
            .then(res => {
                    this.props.dispatch({ type: 'GET_USER', user: res.user })
            })
        }
    }

    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={(e) => this.handleEditProfile(e)} >

                            <FormGroup>
                                <label htmlFor="#email">Email</label>
                                <FormInput name="email" id="#email" placeholder="Email" />
                            </FormGroup>
                            
                            <FormGroup>
                                <label htmlFor="#current-password">Current Password</label>
                                <FormInput name="currentPassword" type="password" id="#current-password" placeholder="Current Password" />
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="#password">New Password</label>
                                <FormInput name="password" type="password" id="#password" placeholder="New Password" />
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="#confirm-password">Confirm Password</label>
                                <FormInput name="confirmPassword" type="password" id="#confirm-password" placeholder="Confirm Password" />
                            </FormGroup>

                            <Button type="submit" variant="primary">Save changes</Button>
                            <Button variant="secondary">Cancel</Button>
                        </Form>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(EditProfile)