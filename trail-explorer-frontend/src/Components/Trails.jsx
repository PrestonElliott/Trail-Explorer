import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, ListGroup } from "react-bootstrap"

class Trails extends Component {

    fetchTrails = (lat, lon) => {
        const maxResults = 25
        const decimalReplaceLat = lat.replace('.', '!')
        const decimalReplaceLon = lon.replace('.', '!')
        fetch(`http://localhost:3000/trails&lat=${decimalReplaceLat}&lon=${decimalReplaceLon}&maxResults=${maxResults}`)
        .then(res => res.json())
        .then(res => this.props.dispatch({ type: "FETCH_TRAILS", data: res }))
    }

    componentDidMount() {
        this.fetchTrails("33.7490", "-84.3880")
    }

    renderTrails = () => {
        console.log("TRAILS", this.props.trailReducer)
        if(this.props){
          const trailCards = this.props.trailReducer.map(t => {
            return(
                <Card id="trail-card">
                    <Card.Img id="trail-card-image" alt="trail-img" className="card-img-top" src={t.imgSmallMed ? ( t.imgSmallMed) : ("https://pdxfamilyadventures.com/wp-content/uploads/2012/11/DSC03794.jpg")} />
                    
                    <Card.Title>{t.name}</Card.Title>

                    <Card.Body>
                        <Card.Text>{t.location} </Card.Text>
                        <Card.Text id="trail-summary">{t.summary} </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Stars: {t.stars}</ListGroup.Item>
                            <ListGroup.Item>Length: {t.length} miles</ListGroup.Item>
                            <ListGroup.Item>Ascent: {t.ascent} ft, Descent: {t.descent} ft</ListGroup.Item>
                            <ListGroup.Item>High: {t.high} ft, Low: {t.low}</ListGroup.Item>
                            <ListGroup.Item>Difficulty: {t.difficulty}</ListGroup.Item>
                            {/* <ListGroup.Item id="trail-conditions">Conditions: {t.conditionStatus}, {t.conditionDetails}</ListGroup.Item> */}
                            <ListGroup.Item> <a href={t.url} rel="noopener noreferrer" target="_blank">Trail Details </a></ListGroup.Item>
                        </ListGroup>
                  </Card.Body>
              </Card>
            )
        })
          return(
            <div className = "row">
              {trailCards}
            </div>
          )
        }
    }   

    render() {
        return (
            <div>
                {this.renderTrails()}
            </div>
        )
    }
}

let mapStateToProps = state => ({ trailReducer: state.trailReducer.trail })
export default connect(mapStateToProps)(Trails)