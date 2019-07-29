import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from "react-bootstrap"
import Modal from "react-modal"

class FutureTrip extends Component {

    state = { showModal: false }

    renderFutureTripModal = () => {
        Modal.setAppElement("#root")
        return <Modal id='future-trip-show-modal' isOpen={this.state.showModal} >
            {/* CREATE NEW MIGRATION TO ADD MORE TRIP DETAILS */}
            <p>{this.props.futureTrip.note}</p>
            <Button onClick={()=> this.setState({ showModal: false }) } variant="secondary">Close</Button>
        </Modal>
    }

    render() {
        return (
            <div>
                { this.renderFutureTripModal() }

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Text>
                        {this.props.futureTrip.note}
                    </Card.Text>
                    <Button onClick={()=> this.setState({ showModal: true })} variant="primary">Future Trip Details</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(FutureTrip)