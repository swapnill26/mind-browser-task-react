import { DATA_ERROR, EMPLOYEE_INFO_ADDED } from '../action/types';
import Axios from 'axios';

export const AddEmployee=(emp)=>async dispatch=>{
    try {
        const res= await Axios.post('http://localhost:4000/',emp)
        dispatch({
            type:EMPLOYEE_INFO_ADDED,
            payload:res.data
        })
        
    } catch (error) {
        dispatch({
            type:DATA_ERROR
        })
    }
}


