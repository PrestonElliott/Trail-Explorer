import React, { Component } from 'react'
import { connect } from 'react-redux'
import Trip from "../Components/Trip"

class TripsContainer extends Component {
    render() {
        return (
            <div>
                <h4> {this.props.user.trips.map(trip => <Trip key={trip.id} trip={trip}/>)} </h4>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(TripsContainer)