import React, { Component } from 'react'
import { connect } from 'react-redux'
import Trail from "./Trail"
import { getTrails, fetchedTrails } from "../Services/backend"

class Profile extends Component {
    componentDidMount() {
        getTrails().then(this.props.fetchedTrails)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.user.name}</h2>
                <h2>{this.props.user.email}</h2>
                {/* <p> {this.props.user.trails.map(trail => <Trail key={trail.id} trail={trail}/>)}</p> */}
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps, { fetchedTrails })(Profile)
