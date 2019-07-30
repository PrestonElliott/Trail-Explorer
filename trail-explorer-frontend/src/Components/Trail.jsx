import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap';

class Trail extends Component {

    fetchTrails = (lat, lon) => {
        const maxResults = 100
        const decimalReplaceLat = lat.replace('.', '!')
        const decimalReplaceLon = lon.replace('.', '!')
        fetch(`http://localhost:3000/trails&lat=${decimalReplaceLat}&lon=${decimalReplaceLon}&maxResults=${maxResults}`)
        .then(res => res.json())
        .then(res => this.props.dispatch({ type: "FETCH_TRAILS", data: res }))
    }

    render() {
        return (
            <div>
                <Button onClick={e => this.fetchTrails("33.7490", "-84.3880")}></Button>
                {/* {this.fetchTrails("33.7490", "-84.3880")} */}
            </div>
        )
    }
}

let mapStateToProps = state => ({ trailReducer: state.trailReducer.trail })
export default connect(mapStateToProps)(Trail)