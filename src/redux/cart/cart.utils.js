const  checkIfItemExist = (cartItems, cartItemToFind) => (cartItems.find(
    cartItem => cartItem.id === cartItemToFind.id
)
);

export const addItemToCart = (cartItems, cartItemToAdd) => {
   
    if (checkIfItemExist(cartItems, cartItemToAdd)) {
        return cartItems.map(cartItem =>
                cartItem.id == cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
                )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem =  checkIfItemExist(cartItems, cartItemToRemove);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )


}