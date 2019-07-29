import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Form, FormInput, FormGroup } from "shards-react"

class TripForm extends Component {

    state = { trail_ids: [] }

    handleCreateTrip = (target, trail_id) => {
        let newArr = this.state.trail_ids

        if (target.checked)
            newArr.push(trail_id)
        else 
            newArr.splice(newArr.indexOf(trail_id), 1)

        this.setState({ trail_ids: newArr })
    }

    render() {
        return (
            <div>
                <Fragment>
                    <Form onSubmit={(e) => this.handleCreateTrip(e)}>
                        <h3>Create a New Trip!</h3>

                        <FormGroup>
                            <FormInput name="title" id="#title" placeholder="Trip Title" />
                        </FormGroup>

                        <FormGroup>
                            <FormInput name="description" id="#description" placeholder="Trip Description" />
                        </FormGroup>

                        <FormGroup>
                            <FormInput name="location" id="#location" placeholder="Trip Location" />
                        </FormGroup>

                        <FormGroup>
                            <FormInput name="stars" id="#stars" placeholder="Trip Stars" />
                        </FormGroup>

                        <FormGroup>
                            <FormInput name="image" id="#image" placeholder="Trip Image" />
                        </FormGroup>

                        <FormGroup>
                            <button type="submit">Submit Trip</button>
                        </FormGroup>
                    </Form>

                </Fragment>
            </div>
        )
    }
}

export default connect()(TripForm)