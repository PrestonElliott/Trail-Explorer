let initialState = {
    loggedIn: !!localStorage.token,
    user: {}
}
  
export default (state = initialState, action) => {
    switch (action.type) {

        case "GET_USER": {
            return { ...state, user: action.user, loggedIn: true }
        }

        case "NEW_TRIP": {
            console.log(action.trip)
            let newArr = state.user.trips
            newArr.push(action.trip)
            return {...state, user: {...state.user, trips: newArr}}
        }

        case "NEW_FUTURE_TRIP": {
            console.log(action.trip)
            let newArr = state.user.trips
            newArr.push(action.trip)
            return {...state, user: {...state.user, future_trips: newArr}}
        }

        case "LOG_OUT": {
            localStorage.removeItem('token')
            return {...state, user: {}, loggedIn: false }
        }

        default: {
            return state
        }
    }
}