import {NEXT_PAGE,PREV_PAGE} from '../action/types';

const initialState={
    page:1
}

export default function(state=initialState,action){
    switch(action.type){
        
        case NEXT_PAGE:
            return{
                ...state,
                page:state.page+1
            }
        case PREV_PAGE:
            return{
                ...state,
                page:state.page-1
            }
        default:
            return state
    }
}   