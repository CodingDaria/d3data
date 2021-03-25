import axios from 'axios'

const GET_CITIZENS = 'GET_CITIZENS'
const SET_GROUP = 'SET_GROUP'
const REMOVE_GROUP = 'REMOVE_GROUP'

const initialState = {
  citizens: [],
  levels_1: [],
  levels_2: [],
  chosenGroups: { levels_1: [], levels_2: [] }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIZENS:
      return {
        ...state,
        citizens: action.citizens,
        levels_1: action.levels_1,
        levels_2: action.levels_2
      }
    case SET_GROUP:
      return {
        ...state,
        chosenGroups: {
          levels_1: action.levels_1
            ? [...state.chosenGroups.levels_1, action.levels_1]
            : state.chosenGroups.levels_1,
          levels_2: action.levels_2
            ? [...state.chosenGroups.levels_2, action.levels_2]
            : state.chosenGroups.levels_2
        }
      }
    case REMOVE_GROUP:
      return {
        ...state,
        chosenGroups: state.chosenGroups.filter((group) => group !== action.group)
      }
    default:
      return state
  }
}

export function getCitizens() {
  return async (dispatch) => {
    try {
      const { data: citizens } = await axios('/api/v1/citizens')
      const levels_1 = citizens
        .map((group) => group.level_1)
        .filter((it, index, array) => index === array.indexOf(it))
      const levels_2 = citizens
        .map((group) => group.level_2)
        .filter((it, index, array) => index === array.indexOf(it))
      dispatch({ type: GET_CITIZENS, citizens, levels_1, levels_2 })
    } catch (err) {
      console.error(new Error(err), 'no citizens data available')
    }
  }
}

export function setChosenGroups(group) {
  return (dispatch, getState) => {
    const store = getState()
    const { levels_1, levels_2 } = store.citizensReducer
    dispatch({
      type: SET_GROUP,
      levels_1: levels_1.indexOf(group) > -1 && group,
      levels_2: levels_2.indexOf(group) > -1 && group
    })
  }
}

export function removeGroup(group) {
  return { type: REMOVE_GROUP, group }
}
