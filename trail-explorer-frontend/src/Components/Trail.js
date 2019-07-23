import React, { Component } from 'react'
import { connect } from 'react-redux'

class Trail extends Component {
    render(props) {
        console.log(props)
        return (
            <div>
                <div>
                    <h3>{props.trail.name}</h3><br></br>
                    <h3>{props.trail.location}</h3>
                    <h3>{props.trail.difficulty}</h3>
                    <h3>{props.trail.stars}</h3>
                </div>
                <div>
                    <a href={props.trail.url}>
                        <span>{props.trail.name}</span> 
                    </a>
                    <div>
                        <img src={props.trail.imgSmallMed} alt="trail smallMed"/>
                    </div>
                    <div>
                        <img src={props.trail.imgMedium} alt="trail Medium"/>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => ({ trailReducer: state.trailReducer.trail })
export default connect(mapStateToProps)(Trail)