import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from "react-bootstrap"
import Modal from "react-modal"

class Trip extends Component {

    state = { showModal: false }

    renderTripModal = () => {
        Modal.setAppElement("#root")
        return <Modal id='trip-show-modal' isOpen={this.state.showModal} >
            {/* CREATE NEW MIGRATION TO ADD MORE TRIP DETAILS */}
            {/* <h4> {this.props.trip.title} </h4> */}
            <p>{this.props.trip.description}</p>
            <p> {this.props.trip.stars} </p>
            <Button onClick={()=> this.setState({ showModal: false }) } variant="secondary">Close</Button>
        </Modal>
    }

    render() {
        return (
            <div>
                { this.renderTripModal() }

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.trip.image} />
                    <Card.Body>
                    <Card.Text>
                        {this.props.trip.description}
                    </Card.Text>
                    <Button onClick={()=> this.setState({ showModal: true })} variant="primary">Trip Details</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(Trip)