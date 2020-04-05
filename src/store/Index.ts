import { routerMiddleware, connectRouter } from 'connected-react-router'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import history from './History'

const middleware = routerMiddleware(history)
console.log(process.env.NODE_ENV)
const store = createStore(
  combineReducers({
    router: connectRouter(history),
  }),
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(middleware))
    : applyMiddleware(middleware),
)

export default store
