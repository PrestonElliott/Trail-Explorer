import React, { Component } from 'react'
import { connect } from 'react-redux'
import FutureTrip from "../Components/FutureTrip"

class FutureTripsContainer extends Component {
    render() {
        return (
            <div>
                <h4> {this.props.user.futureTrips.map(futureTrip => <FutureTrip key={futureTrip.id} futureTrip={futureTrip}/>)} </h4>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(FutureTripsContainer)