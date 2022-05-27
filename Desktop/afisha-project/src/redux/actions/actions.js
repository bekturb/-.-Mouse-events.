import {
    ADD_TO_BASKET,
    DELETE__BASKET,
    GET_ADVERTISING,
    GET_ITEMS,
    GET_SEARCH_ITEM,
    GET_SINGLE_ITEM
} from "../actionTypes/actionTypes";
import axios from "axios";
import URL  from  '../../components/Private'


export const getAdvertising = () => {
    return async (dispatch) => {
        const url = await axios(`${URL.baseURL}/category`)
        const response = await url
        dispatch({type: GET_ADVERTISING, payload: response.data})
    }
}

export const getAllItems = () => {
    return async (dispatch) => {
        const url = await axios(`${URL.baseURL}/event`)
        const response = await url
        dispatch({type: GET_ITEMS, payload: response.data})
    }
}

export const getSingleItem = (id) => {
       return  {type: GET_SINGLE_ITEM, payload: id}
}


export const getSearchItem = (data) => {
    // return async (dispatch) => {
    //     const url = await axios(`${URL.secondURL}${data}`)
    //     const response = await url
      return  {type: GET_SEARCH_ITEM, payload: data}
    }

export const addToBasket = (id) => {

        return {type: ADD_TO_BASKET, payload: id}
    }

export const deleteBasket = (id) => {

    return {type: DELETE__BASKET, payload: id}
}