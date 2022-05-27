import {
    ADD_TO_BASKET,
    DELETE__BASKET,
    GET_ADVERTISING,
    GET_ITEMS,
    GET_SEARCH_ITEM,
    GET_SINGLE_ITEM
} from "../actionTypes/actionTypes";


const initialValue = {
    advertising: [],
    allItems: [],
    singleItem: [],
    addBasket: [],
}

export const Reducer = (state = initialValue, action) => {

    switch (action.type) {
        case GET_ADVERTISING:
            console.log(action.payload)
            return {...state, advertising: action.payload}

        case GET_ITEMS:
            return {...state, allItems: [...action.payload]}

        case GET_SINGLE_ITEM:
            const getSingle = state.allItems.filter(el => {
                if (el.id === action.payload) {
                    return el
                }
            })
            return {...state, singleItem: getSingle}

        case GET_SEARCH_ITEM:

            return {...state, allItems: state.allItems.filter(el => el.name.toUpperCase().includes(action.payload.toUpperCase()))}

        case ADD_TO_BASKET:
            state.addBasket = state.allItems.filter(el => el.id === Number(action.payload))
            const foundId = state.addBasket.find(el => el.id === Number(action.payload))
            console.log(foundId)

            if (foundId) {
                return {
                    ...state, addBasket: state.addBasket.map(el => {
                        return el.id === Number(action.payload) ? {...el, quantity: el.quantity + 1} : el
                    })
                }
            }
            return {...state, addBasket: [...state.addBasket, {...state.addBasket, quantity: 1}]}

        case DELETE__BASKET:
            return {...state, addBasket: state.addBasket.filter(el => {
                    return el.id !== Number(action.payload)
                })}
        default:
            return state
    }
}