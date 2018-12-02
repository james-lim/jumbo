import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import mainReducer from './reducers'
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'
import { generateContractsInitialState } from 'drizzle'
import drizzleOptions from './drizzleOptions'

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const history = createHistory()

const loggerMiddleware = createLogger()
const routingMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

const testRestaurantData = {
  name: 'Name',
  location: [213,132],
  image: '0x12341234',
  berry: 0,
  symbol: '0x12341234',
}

const initialState = {
  restaurant: {
    threeJumbos: [testRestaurantData, testRestaurantData, testRestaurantData],
    twoJumbos: [testRestaurantData, testRestaurantData, testRestaurantData],
    oneJumbos: [testRestaurantData, testRestaurantData, testRestaurantData],
    korean: [testRestaurantData, testRestaurantData, testRestaurantData],
    japanese: [testRestaurantData, testRestaurantData, testRestaurantData],
    chinese: [testRestaurantData, testRestaurantData, testRestaurantData],
  },

  contracts: generateContractsInitialState(drizzleOptions),
}

const store = createStore(
  mainReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      routingMiddleware,
      loggerMiddleware,
      sagaMiddleware,
    ),
  ),
)

sagaMiddleware.run(rootSaga)

export { history }
export { store }

export default store
