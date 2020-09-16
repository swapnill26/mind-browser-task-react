import { DATA_ERROR, EMPLOYEE_INFO_ADDED } from '../action/types';

const initialState={
    loading:true,
    employee:[]
}

export default function(state = initialState, action) {
    switch (action.type) {
      
      case EMPLOYEE_INFO_ADDED:
        return {
          ...state,
          loading:false,
          employee:action.payload
        }
      
      case DATA_ERROR:
        return{
          loading:true
        }
      default:
        return state
    }
  }