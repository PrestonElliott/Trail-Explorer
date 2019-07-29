import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Iframe from 'react-iframe'
import { Button } from "react-bootstrap"
import TripsContainer from "../Containers/TripsContainer"
import FutureTripsContainer from "../Containers/FutureTripsContainer"


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
                <Link to="/trip-form"> 
                    <Button  variant="secondary">Log Your Trip!</Button>
                </Link> 
                <Link to="/future-trip-form"> 
                    <Button  variant="secondary">Create a Future Trip!</Button>
                </Link> 
                <TripsContainer/>
                <FutureTripsContainer />
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(Profile)