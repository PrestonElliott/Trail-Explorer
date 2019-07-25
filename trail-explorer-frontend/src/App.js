import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from "./Components/Navbar"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Home from "./Components/Home"
import SignUp from "./Components/SignUp"
import './App.css'
import TrailsHome from './Components/TrailsHome';

class App extends React.Component {

  componentDidMount() {
    if(localStorage.token) {
      fetch('http://localhost:3000/profile',{
        headers: { Authorization: localStorage.token }
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if(res.user)
          this.props.dispatch({ type: 'GET_USER', user: res.user })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/trails' component={TrailsHome} />
          <Route path='/login' render={()=> this.props.loggedIn ? <Redirect to='/profile'/> : <Login/> } />
          <Route path='/profile' render={()=> this.props.loggedIn  ? <Profile/> : <Redirect to='/login'/> } />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    )
  }
}

let mapStateToProps = state => ({ user: state.userReducer.user, loggedIn: state.userReducer.loggedIn })
export default connect(mapStateToProps)(App)
