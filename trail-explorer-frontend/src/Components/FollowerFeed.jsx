import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Trip from './Trip'
import FutureTrip from "./FutureTrip"

class FollowerFeed extends Component {

    render() {
        return (
            <Fragment>
                <div className='tripcard-div'>
                    {
                        this.props.user.followed_users.map(friend => {
                            return friend.trips.map(trip => {
                                return <Trip key={trip.id} trip={trip} />
                            })
                        })
                    }
                </div>

                <div className='futuretripcard-div'>
                    {
                        this.props.user.followed_users.map(friend => {
                            return friend.futureTrips.map(futureTrip => {
                                return <FutureTrip key={futureTrip.id} futureTrip={futureTrip} />
                            })
                        })
                    }
                </div>
            </Fragment>
        )
    }
}
let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(FollowerFeed)