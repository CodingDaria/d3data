import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import citizensReducer from './citizens'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    citizensReducer
  })

export default createRootReducer
