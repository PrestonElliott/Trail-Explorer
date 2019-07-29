import React, { Component } from 'react'
import { connect } from 'react-redux'

class TripForm extends Component {

    state = { trail_ids: [] }

    handleClick = (target, trail_id) => {
        let newArr = this.state.trail_ids

        if (target.checked)
            newArr.push(trail_id)
        else 
            newArr.splice(newArr.indexOf(trail_id), 1)

        this.setState({ trail_ids: newArr })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect()(TripForm)