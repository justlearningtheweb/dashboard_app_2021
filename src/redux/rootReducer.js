const SET_USER_TO_STATE = 'SET_USER_TO_STATE'

const initialState = {
  name: 'VU',
  user: null
}

function setUserToStateAction(payload) {
  return {
    type: SET_USER_TO_STATE,
    payload
  }
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER_TO_STATE: {
      return Object.assign({}, state, {
        user: action.payload
      })
    }
    default: {
      return state
    }
  }
}

export default rootReducer

export {
  setUserToStateAction
}