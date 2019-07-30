import React, { Component } from 'react'
import { connect } from 'react-redux'
import Iframe from 'react-iframe'
import Trail from "./Trail"

class TrailsHome extends Component {

    render() { 
        return ( 
            <div>
                <h3> FIND A TRAIL NEAR YOU! </h3>
                <Trail/>
                <Iframe title="trails-map" className="trails-map" position="absolute" frameborder="0" scrolling="no" 
                    src="https://www.hikingproject.com/widget/map?favs=1&location=ip&x=-9402411&y=4020493&z=11.5&h=500">
                </Iframe>
            </div> 
        )
    }
}

let mapStateToProps = state => ({ trail: state.trailReducer.trail })
export default connect(mapStateToProps)(TrailsHome)