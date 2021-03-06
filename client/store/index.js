import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userReducer} from './user'
import {albumsReducer} from './albums'
import {albumReducer} from './album'
import {cartReducer} from './cart'

const reducer = combineReducers({
  user: userReducer,
  albums: albumsReducer,
  album: albumReducer,
  cart: cartReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './albums'
export * from './album'
export * from './cart'
