const initState = {
    packagesItem: [],
    totalAmount: 0
}


const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADDTOCART':
            let updatedCart = { ...state };
            const cartItemIndex = updatedCart.packagesItem.findIndex(item => item.packageId === action.packageId);
            const cartItem = [...state.packagesItem];
            let quantity = action.items.quantity;
            if (cartItem[cartItemIndex]) {
                updatedCart.packagesItem[cartItemIndex].quantity = quantity;
                updatedCart.totalAmount = updatedCart.totalAmount + action.totalAmount;
            } else {
                updatedCart.packagesItem = updatedCart.packagesItem.concat(action.items);
                updatedCart.totalAmount = updatedCart.totalAmount + action.totalAmount;
            }
            return {
                ...state,
                packagesItem: updatedCart.packagesItem,
                totalAmount: updatedCart.totalAmount
            }
        case 'INCREASECART':
            let newIncreaseCart = { ...state };
            const itemIncrease = action.index;
            newIncreaseCart.packagesItem[action.index].quantity = newIncreaseCart.packagesItem[itemIncrease].quantity + 1;
            newIncreaseCart.totalAmount = newIncreaseCart.totalAmount + newIncreaseCart.packagesItem[itemIncrease].packagePrice;
            return {
                ...state,
                packageItem: newIncreaseCart.packagesItem,
                totalAmount: newIncreaseCart.totalAmount
            }
        case 'DECREASECART':
            let decreaseCart = { ...state };
            const indexDecrease = action.index;
            if (decreaseCart.packagesItem[indexDecrease].quantity <= 1) {
                decreaseCart.totalAmount = decreaseCart.totalAmount - (decreaseCart.packagesItem[indexDecrease].packagePrice * decreaseCart.packagesItem[indexDecrease].quantity);
                decreaseCart.packagesItem[indexDecrease].quantity = 0;
                decreaseCart.packagesItem.splice(indexDecrease, 1);
            } else {
                decreaseCart.packagesItem[action.index].quantity = decreaseCart.packagesItem[indexDecrease].quantity - 1;
                decreaseCart.totalAmount = decreaseCart.totalAmount - decreaseCart.packagesItem[indexDecrease].packagePrice;
            }
            return {
                ...state,
                packageItem: decreaseCart.packagesItem,
                totalAmount: decreaseCart.totalAmount
            }
        case 'REMOVECART':
            return {
                packagesItem: [],
                totalAmount: 0
            }
        default:
            return state;
    }
}

export default cartReducer;