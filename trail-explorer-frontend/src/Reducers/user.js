let initialState = {
    loggedIn: !!localStorage.token,
    user: {}
}
  
export default (state = initialState, action) => {
    switch (action.type) {

        case "GET_USER": {
            return { ...state, user: action.user, loggedIn: true }
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