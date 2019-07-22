let initialState = {
    trail: [],
    pageOffset: 0
  }
  
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_TRAILS": {
        return { ...state, trail: action.data }
        }
        case "MORE_TRAILS": {
        let newOffset = (state.pageOffset + 10) % 500
        return { ...state, pageOffset: newOffset }
        }
        default: {
        return state
        }
    }
}