import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from "react-bootstrap"

class Trail extends Component {

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
                <div className="card" style={{width: 17 + 'rem' }}>
                  <img alt="trail-img" className="card-img-top" src={t.imgMedium ? ( t.imgMedium) : ("https://pdxfamilyadventures.com/wp-content/uploads/2012/11/DSC03794.jpg")} />
                <div className="card-body">
                    <Card.Header>{t.name}</Card.Header>
                    <h2 className="card-text">{t.location} </h2>
                    <h4 className="card-text">{t.summary} </h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Stars: {t.stars}</li>
                  <li className="list-group-item">Length: {t.length} miles</li>
                  <li className="list-group-item">Ascent: {t.ascent} ft, Descent: {t.descent} ft</li>
                  <li className="list-group-item">High: {t.high} ft, Low: {t.low}</li>
                  <li className="list-group-item">Difficulty: {t.difficulty}</li>
                  <li className="list-group-item">Conditions: {t.conditionStatus}, {t.conditionDetails} </li>
                  <li className="list-group-item"><a href={t.url} target="_blank" rel="noopener noreferrer" className="card-link">Trail Information</a></li>
                </ul>
                  </div>
              </div>
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
export default connect(mapStateToProps)(Trail)