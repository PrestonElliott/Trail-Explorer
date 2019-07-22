let initialState = {
    trail: [],
  }
  
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_TRAILS": {
        return { ...state, trail: action.data }
        }

        default: {
        return state
        }
    }
}