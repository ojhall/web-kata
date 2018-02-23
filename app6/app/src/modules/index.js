
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import versions from './versions'
import products from './products'

export default combineReducers({
  products: products,
  routing: routerReducer,
  versions: versions
})