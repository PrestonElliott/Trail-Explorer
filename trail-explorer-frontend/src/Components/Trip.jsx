import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from "react-bootstrap"

class Trip extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={this.props.trip.image} />
                  <Card.Body>
                    <Card.Text>
                      {this.props.trip.description}
                    </Card.Text>
                    <Button variant="primary">Trip Details</Button>
                  </Card.Body>
                </Card>
            </div>

        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(Trip)