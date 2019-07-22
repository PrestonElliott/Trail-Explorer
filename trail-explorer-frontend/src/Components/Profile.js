import React, { Component } from 'react';
import { connect } from 'react-redux'

class Profile extends Component {
    render() {
        return (
            <div>
                <h2>{user}</h2>
            </div>
        );
    }
}

// mapStateToProps = state => ({ state })
// export default ()(Profile);

