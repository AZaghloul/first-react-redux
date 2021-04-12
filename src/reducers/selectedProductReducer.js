const selectedProductReducer = (state = null, action) => {
    switch(action.type){
        case 'SELECT_PRODUCT':
            return action.payload.product;
        default:
            return state
    }
}

export default selectedProductReducer;