import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Form, FormInput, FormGroup, FormSelect } from "shards-react"
import { Modal, Button } from "react-bootstrap"

class TripForm extends Component {

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

    handleCreateTrip = (e) => {
        e.preventDefault()
        let form = e.target

        fetch('http://localhost:3000/trips',{
            method: 'POST',
            headers: { Authorization: localStorage.token, 
                    Accept: 'application/json', 
                    'Content-Type':'application/json' },
            body: JSON.stringify({
                trip: {
                    title: form.title.value,
                    description: form.description.value,
                    location: form.location.value,
                    stars: form.stars.value,
                    image: form.image.value,
                    trail_ids: this.state.trail_ids
                }
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.trip)
                this.props.dispatch({ type: 'NEW_TRIP', trip: res.trip })
        })
    }

    render() {
        if (!this.state.trails[0])
            return null

        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Create a New Trip!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={(e) => this.handleCreateTrip(e)}>

                            <FormGroup>
                                <FormInput required name="title" id="#title" placeholder="Title" />
                            </FormGroup>

                            <FormGroup>
                                <FormInput name="description" id="#description" placeholder="Description" />
                            </FormGroup>

                            <FormGroup>
                                <FormInput name="location" id="#location" placeholder="Location" />
                            </FormGroup>

                            <FormGroup>
                                <FormInput name="image" id="#image" placeholder="Image URL" />
                            </FormGroup>

                            <FormGroup>
                                { this.state.trails.map(trail => {
                                    return <Fragment key={trail.id} >
                                            <input type='checkbox' onChange={ e => this.handleCheckboxChange(e.target, trail.id)} /> {trail.name}
                                            <br/>
                                        </Fragment>
                                    })
                                }
                            </FormGroup>

                            <FormSelect defaultValue='default' name="stars" id="#stars"  >
                                <option disabled value='default'>Stars</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </FormSelect>

                            <FormGroup>
                                <Button className="m-3" type="submit">Submit Trip</Button>
                            </FormGroup>
                        </Form>

                    </Modal.Body>
                </Modal.Dialog>
            </div>
        )
    }
}

export default connect()(TripForm)