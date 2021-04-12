const INITIAL_STATE = [
    {id:1 , name:"Burger", price:50},
    {id:2 , name:"Fries", price:40},
    {id:3 , name:"Cola", price:30}
];

const productsReducer = (state = INITIAL_STATE,action) => {
    return state;
}

export default productsReducer;