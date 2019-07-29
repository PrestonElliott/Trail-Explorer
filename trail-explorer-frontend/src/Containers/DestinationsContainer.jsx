import React, { Component } from 'react'
import { connect } from 'react-redux'
import Destination from "../Components/Destination"

class DestinationsContainer extends Component {
    render() {
        return (
            <div>
                <h4> {this.props.user.trips.map(destination => <Destination key={destination.id} destination={destination}/>)} </h4>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(DestinationsContainer)