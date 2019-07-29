import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Trip from './Trip'
import FutureTrip from "./FutureTrip"
import {Row, Col} from 'react-bootstrap'

class FollowerFeed extends Component {

    render() {
        return (
            <Fragment>
                <div className='tripcard-div'>
                    <Row>
                        {this.props.user.followed_users.map(friend => 
                            friend.trips.map(trip => 
                                <Col md={3}><Trip key={trip.id} trip={trip} /> </Col>))
                        }
                    </Row>
                </div>

                <div className='futuretripcard-div'>
                    <Row>
                        {this.props.user.followed_users.map(friend => 
                            friend.futureTrips.map(futureTrip => 
                                <Col md={3}><FutureTrip key={futureTrip.id} futureTrip={futureTrip}/> </Col>))
                        }
                    </Row>
                </div>
            </Fragment>
        )
    }
}
let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(FollowerFeed)