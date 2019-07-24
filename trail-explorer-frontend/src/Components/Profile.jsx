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
                    <Iframe title="trails-map" className="trails-map" position="absolute" frameborder="0" scrolling="no" 
                        src="https://www.hikingproject.com/widget/map?favs=1&location=ip&x=-9402411&y=4020493&z=11.5&h=500">
                    </Iframe>
                </div>
                <TrailsContainer/>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps, { fetchedTrails })(Profile)