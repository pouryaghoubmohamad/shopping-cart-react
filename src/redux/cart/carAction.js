const addCart = (product) =>{
    return {
        type : "ADD_CART" ,
        payload : product ,
    }
}

const removerCart = (products) =>{
    return {
        type : "REMOVE_CART" ,
        payload : products ,
    }
}

const increaseCart = (products) => {
    return {
        type : "INCREASE_CART" ,
        payload : products
    }
}

const decreaseCart = (products) => {
    return{
        type : "DECREASE_CART" ,
        payload : products ,
    }
}

const clear = () =>{
    return {
        type : "CLEAR"
    }
}

const checkout = () => {
    return {
        type : "CHECKOUT"
    }
}

export { addCart , removerCart , increaseCart , decreaseCart , clear , checkout }