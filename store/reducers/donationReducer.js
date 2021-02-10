const initState = {
    allItems: {
        packagesItem: []
    }
}


const donationReview = (state = initState, action) => {
    switch (action.type) {
        case 'ADDTOREVIEW':
            return {
                allItems: action.cart
            }
        case 'CLOSEDONATION':
            return {
                allItems: {
                    packagesItem: []
                }
            }
        default:
            return state;
    }
}

export default donationReview;