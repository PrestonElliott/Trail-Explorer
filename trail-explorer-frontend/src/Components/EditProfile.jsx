import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormInput, FormGroup } from "shards-react"
import { Modal, Button } from "react-bootstrap"

class EditProfile extends Component {

    handleEditProfile = (e) => {
        e.preventDefault()
        console.log(e.target)
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