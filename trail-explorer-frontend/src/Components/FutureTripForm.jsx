import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Form, FormInput, FormGroup } from "shards-react"
import { Modal, Button } from "react-bootstrap"

class FutureTripForm extends Component {

    state = { 
        trails: [],
        trail_ids: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/trails')
        .then(res=>res.json())
        .then(trails => this.setState({ trails }))
    }

    handleCheckboxChange = (target, trail_id) => {
        let newArr = this.state.trail_ids

        if (target.checked)
            newArr.push(trail_id)
        else 
            newArr.splice(newArr.indexOf(trail_id), 1)

        this.setState({ trail_ids: newArr })
    }

    handleCreateFutureTrip = (e) => {
        e.preventDefault()
        let form = e.target

        fetch('http://localhost:3000/future_trips',{
            method: 'POST',
            headers: { Authorization: localStorage.token, Accept: 'application/json', 'Content-Type':'application/json' },
            body: JSON.stringify({
                future_trip: {
                    title: form.title.value,
                    note: form.note.value,
                    location: form.location.value,
                    trail_ids: this.state.trail_ids
                }
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.trip)
                this.props.dispatch({ type: 'NEW_FUTURE_TRIP', future_trip: res.trip })
        })
    }

    render() {
        if (!this.state.trails[0])
            return null

        return (
            <div>
                <Modal.Dialog>
                
                    <Modal.Header>
                        <Modal.Title>Create a New Future Trip!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={(e) => this.handleCreateFutureTrip(e)}>

                            <FormGroup>
                                <FormInput required name="title" id="#title" placeholder="Title" />
                            </FormGroup>

                            <FormGroup>
                                <FormInput name="note" id="#note" placeholder="Note" />
                            </FormGroup>

                            <FormGroup>
                                <FormInput name="location" id="#location" placeholder="Location" />
                            </FormGroup>

                            <FormGroup>
                                { this.state.trails.map(trail => {
                                    return <Fragment key={trail.id}>
                                            <input type='checkbox' onChange={ e => this.handleCheckboxChange(e.target, trail.id)} /> {trail.name}
                                            <br/>
                                        </Fragment>
                                    })
                                }
                            </FormGroup>

                            <FormGroup>
                                <Button type="submit">Submit Future Trip</Button>
                            </FormGroup>
                        </Form>

                    </Modal.Body>
                </Modal.Dialog>
            </div>
        )
    }
}

export default connect()(FutureTripForm)