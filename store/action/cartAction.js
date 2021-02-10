export const addToCarts = (items, totalAmount) => {
    return {
        type: "ADDTOCART",
        packageId: items.packageId,
        items: items,
        totalAmount: totalAmount
    }
}

export const increaseCart = (index) => {
    return {
        type: 'INCREASECART',
        index: index
    }
}

export const decreaseCart = (index) => {
    return {
        type: 'DECREASECART',
        index: index
    }
}

export const removeCartItem = () => {
    return {
        type: 'REMOVECART'
    }
}