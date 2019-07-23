import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTrails, fetchedTrails } from "../Services/backend"
import Trail from "../Components/Trail"

class TrailsContainer extends Component {
    componentDidMount() {
        getTrails().then(this.props.fetchedTrails)
        console.log(this.props)
    }

    render() { 
        return ( 
            <div>
                {/* <Trail/> */}

            </div> 
        )
    }
}

let mapStateToProps = state => ({ trail: state.trailReducer.trail })
export default connect(mapStateToProps, { fetchedTrails })(TrailsContainer)