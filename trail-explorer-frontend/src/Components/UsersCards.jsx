import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap'

class UsersCards extends Component {

    follow = (user) => {
        let follow = { user_id: user.id, followed_user_id: this.props.user.user.id}
        console.log(follow)

        fetch("http://localhost:3000/follows", {
            method: "POST",
            headers: { Accept: 'application/json', 
                    'Content-Type':'application/json',
                    Authorization: localStorage.token},
            body: JSON.stringify({follow: follow})
        }).then(res => res.json())
    }

    render() {
        console.log(this.props.allUsers.allUsers)
        return (
            <div>
            {this.props.allUsers &&
                <Row className="d-flex justify-content-center m-3">
                    {this.props.allUsers.allUsers.map(user => 
                        <Col md={3}> 
                            <Card id="user-card" key={user.id} >
                                <Card.Body>
                                    <Card.Text>
                                         {user.name}<br/> 
                                         {user.email} 
                                    </Card.Text>
                                        <Button onClick={() => this.follow(user)} variant="primary">Follow!</Button>

                                </Card.Body>
                            </Card><br/> 
                        </Col>)
                    }
                </Row>
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    user: state.userReducer,
    allUsers: state.allUsersReducer })

export default connect(mapStateToProps)(UsersCards)