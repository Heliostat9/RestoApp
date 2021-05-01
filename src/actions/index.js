const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
} 

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
}

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    };
}

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    };
}

const deletedToCart = (id) => {
    return {
        type: 'ITEM_DELETE_TO_CART',
        payload: id
    };
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deletedToCart
};