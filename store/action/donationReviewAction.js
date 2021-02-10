export const addToReview = (cart) => {
    return {
        type: 'ADDTOREVIEW',
        cart: cart
    }
}

export const closeDonation = () => {
    return {
        type: 'CLOSEDONATION'
    }
}