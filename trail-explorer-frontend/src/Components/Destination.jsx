import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from "react-bootstrap"

class Destination extends Component {

    render() {
        return (
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            {this.props.destination.trek}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(Destination)