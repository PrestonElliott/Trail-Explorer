import React, { Component } from 'react'
import { connect } from 'react-redux'
import Trail from "./Trail"
import { getTrails, fetchedTrails } from "../Services/backend"
import Iframe from 'react-iframe'

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
                    <Iframe title="trails-map" className="trails-map" position="absolute" width="100%" height="100%" frameborder="0" scrolling="no" 
                        src="https://www.hikingproject.com/widget/map?favs=1&location=fixed&x=-9399899&y=4026097&z=11&h=500">
                    </Iframe>
                </div>
                {/* FIX TRAIL MAPPING BELOW */}
                {/* <p> {this.props.user.trails.map(trail => <Trail key={trail.id} trail={trail}/>)}</p> */}
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps, { fetchedTrails })(Profile)