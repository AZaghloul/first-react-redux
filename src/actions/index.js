export const selectProduct = (product) => {
    return {
        type:"SELECT_PRODUCT",
        payload:{
            product:product
        }
    }
}