import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import {AddEmployee} from '../action/employee'
import {nextPage,prevPage} from '../action/page';




function Main({AddEmployee,nextPage,prevPage,page}) {

    //const [page, setPage] =useState({page:1})
    const [emp,setEmp]=useState({first_name:'',last_name:'',mobile:'',email:'',city:'',dob:'',company:'',job_title:'',linkedin:'',github:'',expertise_in_react:'',summary:''})
  
    // const nextPage=(e)=>{
    //     e.preventDefault();
    //     setPage({page:page.page+1})
    // }
    // const previousPage=(e)=>{
    //     e.preventDefault();
    //     setPage({page:page.page-1})
    // }

    const onChange=(e)=>{
        setEmp({...emp,[e.target.name]:e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault(emp);
        AddEmployee(emp)
    }

    return (
        <div>
            {page.page === 1 ? <FirstPage  onSubmit={nextPage} emp={emp} onChange={onChange}/> :null}
            {page.page === 2 ? <SecondPage prevPage={prevPage} onSubmit={nextPage} emp={emp} onChange={onChange}/> :null }
            {page.page === 3 ? <ThirdPage prevPage={prevPage} emp={emp} onSubmit={onSubmit}/> : null}
        </div>
    )

}

Main.propTypes = {
    AddEmployee:PropTypes.func.isRequired,
    nextPage:PropTypes.func.isRequired,
    prevPage:PropTypes.func.isRequired,
    page:PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
    page:state.page
})


export default connect(mapStateToProps,{AddEmployee,nextPage,prevPage})(Main);










