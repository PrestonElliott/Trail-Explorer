import React from "react";
import { connect } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"

class Home extends React.Component {
    render() { 
        return ( 
            <div>
                <h2> HOME PAGE YO </h2>

            </div> 
        )
    }
}
 
export default connect()(Home)
