import axios from 'axios'

const GET_CITIZENS = 'GET_CITIZENS'
const SET_GROUP = 'SET_GROUP'

const initialState = {
  citizens: [],
  levels_1: [],
  levels_2: []
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
        [action.level]: state[action.level].map((it) => {
          if (it.name === action.group) {
            return { ...it, isChecked: action.isChecked }
          }
          return it
        })
      }
    default:
      return state
  }
}

export function getCitizens() {
  return async (dispatch) => {
    try {
      const { data: citizens } = await axios('/api/v1/citizens')
      const levels_1 = citizens.reduce((acc, group) => {
        if (!acc.find((it) => it.name === group.level_1)) {
          acc.push({ name: group.level_1, isChecked: false })
        }
        return acc
      }, [])
      const levels_2 = citizens.reduce((acc, group) => {
        if (!acc.find((it) => it.name === group.level_2)) {
          acc.push({ name: group.level_2, isChecked: false })
        }
        return acc
      }, [])
      dispatch({ type: GET_CITIZENS, citizens, levels_1, levels_2 })
    } catch (err) {
      console.error(new Error(err), 'no citizens data available')
    }
  }
}

export function setChosenGroups(group, level, isChecked) {
  return {
    type: SET_GROUP,
    group,
    level,
    isChecked
  }
}
