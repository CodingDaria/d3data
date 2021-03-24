import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import citizens from './citizens'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    citizens
  })

export default createRootReducer
