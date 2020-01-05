const SET_USER = 'SET_USER'

const initialState = {
  user: null
}

function setUserToStateAction(payload) {
  return {
    type: SET_USER,
    payload
  }
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER: {
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