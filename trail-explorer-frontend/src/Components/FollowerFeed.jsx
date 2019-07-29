import React, { Component } from 'react'
import { connect } from 'react-redux'
import Trip from './Trip'

class FollowerFeed extends Component {

    render() {
        return (
            <div className='tripcard-div'>
            {
                this.props.user.followed_users.map(friend => {
                    return friend.trips.map(trip => {
                        return <Trip key={trip.id} trip={trip} />
                    })
                })
            }
        </div>
        )
    }
}
let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(FollowerFeed)