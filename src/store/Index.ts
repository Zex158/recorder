import { routerMiddleware, connectRouter } from 'connected-react-router'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import history from './History'

import reducers from '@/reducers/index'

const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  }),
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(middleware))
    : applyMiddleware(middleware),
)

export default store
