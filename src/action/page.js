import {NEXT_PAGE,PREV_PAGE,PAGE_ERROR} from '../action/types';

export const nextPage=()=>dispatch=>{
    try {
       
        dispatch({
            type:NEXT_PAGE
        })
    } catch (error) {
        dispatch({
            type:PAGE_ERROR
        })
    }
}

export const prevPage=()=>dispatch=>{
    try {
        dispatch({
            type:PREV_PAGE
        })
    } catch (error) {
        dispatch({
            type:PAGE_ERROR
        })       
    }
}