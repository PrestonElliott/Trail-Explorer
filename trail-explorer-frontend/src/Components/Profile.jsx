import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTrails, fetchedTrails } from "../Services/backend"
import Iframe from 'react-iframe'
import TrailsContainer from "../Containers/TrailsContainer"

class Profile extends Component {
    componentDidMount() {
        getTrails().then(this.props.fetchedTrails)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="user-profile">
                    <h3>Hey {this.props.user.name}!</h3>
                     <h4>{this.props.user.email}</h4>
                </div>
                <div>
                    <Iframe title="trail-detail-map" className="trail-detail-map" frameborder="0" scrolling="no" 
                        src="https://www.hikingproject.com/widget?v=3&map=1&type=trail&id=0&x=-9401700&y=4014132&z=8">
                    </Iframe>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps, { fetchedTrails })(Profile)