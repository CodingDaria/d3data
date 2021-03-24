import axios from 'axios'

const GET_CITIZENS = 'GET_CITIZENS'

const initialState = {
  citizens: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIZENS:
      return {
        ...state,
        citizens: action.citizens
      }
    default:
      return state
  }
}

export function getCitizens() {
  return async (dispatch) => {
    try {
      const { data: citizens } = await axios('/api/v1/citizens')
      dispatch({ type: GET_CITIZENS, citizens })
    } catch (err) {
      console.error(new Error(err), 'no citizens data available')
    }
  }
}
