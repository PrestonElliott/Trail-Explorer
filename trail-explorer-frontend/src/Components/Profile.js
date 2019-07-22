import React, { Component } from 'react';
import { connect } from 'react-redux'

class Profile extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.user.name}</h2>
            </div>
        );
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(Profile);
