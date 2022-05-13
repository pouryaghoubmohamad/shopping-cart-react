const initialState = {
    products: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
};

const sumItems = (item) => {
    const itemsCounter = item.reduce((acc, curr) => curr.quantity + acc, 0);
    const total = item
        .reduce((acc, curr) => curr.quantity * curr.price + acc, 0)
        .toFixed();
    return { itemsCounter, total };
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
           

            state.products.push({
                ...action.payload,
                quantity: 1,
            });
            return {
                ...state,
                products: [...state.products],
                ...sumItems(state.products),
                checkout: false,
            };

        case "REMOVE_CART":
            const newProducts = state.products.filter(
                (item) => item.id !== action.payload.id
            );

            return {
                ...state,
                products: [...newProducts],
                ...sumItems(newProducts),
            };

        case "INCREASE_CART":
            const indexI = state.products.findIndex(
                (item) => item.id === action.payload.id
            );
            state.products[indexI].quantity++;

            return {
                ...state,
                ...sumItems(state.products),
            };

        case "DECREASE_CART":
            const indexD = state.products.findIndex(
                (item) => item.id === action.payload.id
            );
            state.products[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.products),
            };

        case "CLEAR":
            return {
                products: [],
                itemsCounter: 0,
                total: 0,
                checkout: false,
            };

        case "CHECKOUT":
            return {
                products: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            };

        default:
            return state;
    }
};

export default cartReducer;
