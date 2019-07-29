import React, { Component } from 'react'
import { connect } from 'react-redux'
import Iframe from 'react-iframe'
import TripsContainer from "../Containers/TripsContainer"
import FutureTripsContainer from "../Containers/FutureTripsContainer"
import TripForm from "./TripForm"
import FutureTripForm from "./FutureTripForm"


class Profile extends Component {

    render() {
        // console.log(this.props.user.trips)
        return (
            <div>
                <div className="user-profile">
                    <h3>Hey {this.props.user.name}!</h3>
                </div>
                <div>
                    <Iframe title="trail-detail-map" className="trail-detail-map" frameborder="0" scrolling="no" 
                        src="https://www.hikingproject.com/widget?v=3&map=1&type=trail&id=0&x=-9401700&y=4014132&z=8">
                    </Iframe>
                </div>
                <FutureTripForm />
                <TripForm />
                <TripsContainer/>
                <FutureTripsContainer />
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(Profile)