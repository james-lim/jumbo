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
  location: [213, 132],
  image: '0x12341234',
  berry: 0,
  symbol: '0x12341234',
}

const initialState = {
  restaurant: {
    threeJumbos: [
      {
        name: 'Kang Ho-dong Baekjeong',
        location: '621-29, Yeoksam-dong, Gangnam-gu, Seoul, South Korea',
        image: 'https://s3-media3.fl.yelpcdn.com/bphoto/ac8IT8yaGdl6jHeE-WHI9A/348s.jpg',
        berry: 0,
        symbol: 'https://www.clipartmax.com/png/full/85-856502_overlays-transparent-tumblr-justin-bieber-clip-art-kings-crown.png',
      },
      {
        name: 'Surawon Tofu House',
        location: '621-29, Yeoksam-dong, Gangnam-gu, Seoul, South Korea',
        image: 'https://s3-media2.fl.yelpcdn.com/bphoto/X1R5vyLz2q43XTN4s01qoQ/348s.jpg',
        berry: 0,
        symbol: 'https://png2.kisspng.com/sh/8a47506ba5b66b9d9b4383af49f8725c/L0KzQYi4UsA0N5ZrepGAYUK3cbPpWMdiO2k8TJC5Mkm3QIm5VsE2OWM4TaQBOUa4QIG9TwBvbz==/5a24abb87a3874.0294082615123526965006.png',
      },
      {
        name: 'Ombu Grill',
        location: '621-29, Yeoksam-dong, Gangnam-gu, Seoul, South Korea',
        image: 'https://s3-media1.fl.yelpcdn.com/bphoto/RO32hiZXq-lmWj944ILP5A/348s.jpg',
        berry: 0,
        symbol: 'https://png2.kisspng.com/sh/8a47506ba5b66b9d9b4383af49f8725c/L0KzQYi4UsA0N5ZrepGAYUK3cbPpWMdiO2k8TJC5Mkm3QIm5VsE2OWM4TaQBOUa4QIG9TwBvbz==/5a24abb87a3874.0294082615123526965006.png',
      },
      {
        name: 'Erin McKenna’s Bakery',
        location: '621-29, Yeoksam-dong, Gangnam-gu, Seoul, South Korea',
        image: 'https://s3-media4.fl.yelpcdn.com/bphoto/eOPZlzJoU-qaIotpxIrUlg/348s.jpg',
        berry: 0,
        symbol: 'https://png2.kisspng.com/sh/d8b837be8b5368ec5948c2fb8cd15eb8/L0KzQYi4UsE5N2ZpSpGAYUO6c7O7hcQzbGM2SpCAMkC8SIG9WME2OWQ7SKcENka1R4SATwBvbz==/5a37cb4e42d212.5209806815136059662737.png',
      },
    ],
    twoJumbos: [testRestaurantData, testRestaurantData, testRestaurantData],
    oneJumbos: [testRestaurantData, testRestaurantData, testRestaurantData],
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
