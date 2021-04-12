import {combineReducers} from 'redux'
import productsReducer from './productsReducer'
import selectedProductReducer from './selectedProductReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer
})

export default rootReducer;