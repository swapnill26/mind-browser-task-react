import React, { Fragment } from 'react'
import ProgressBar from '../../node_modules/react-bootstrap/ProgressBar'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const ThirdPage = ({previousPage,emp,onSubmit}) => {
    return (
        <Fragment>
                <form>
                <div className="container">
                    <label htmlFor="" id='progress'>Progress ......</label>
                    <ProgressBar className='progress' now={100} label={100} />
                    <div className="card mt-50">
                        <div className="card-header">All Information</div>
                        <div className="card-body">
                            <div className="data">
                                <label>name :- </label>
                                <label htmlFor="">{emp.first_name} {emp.last_name}</label><br/>
                                <label htmlFor="">Mobile :- </label>
                                <label htmlFor="">{emp.mobile}</label><br/>
                                <label htmlFor="">Email :- </label>
                                <label htmlFor="">{emp.email}</label><br/>
                                <label htmlFor="">City :- </label>
                                <label htmlFor="">{emp.city}</label><br/>
                                <label htmlFor="">DOB :- </label>
                                <label htmlFor="">{emp.dob}</label><br/>
                                <label htmlFor="">Company :- </label>
                                <label htmlFor="">{emp.company}</label><br/>
                                <label htmlFor="">Job Title :- </label>
                                <label htmlFor="">{emp.job_title}</label><br/>
                                <label htmlFor="">Linkedin :- </label>
                                <label htmlFor="">{emp.linkedin}</label><br/>
                                <label htmlFor="">GITHUB :- </label>
                                <label htmlFor="">{emp.github}</label><br/>
                                <label htmlFor="">expertise in react :- </label>
                                <label htmlFor="">
                                    {emp.expertise_in_react<50  ? <label htmlFor="">beginner in react</label> :null}
                                    {emp.expertise_in_react>50 ? <label htmlFor=""> Intermediate in react</label> :null}
                                    {emp.expertise_in_react===100 ? <label htmlFor=""> Expert in react</label> :null}
                                </label><br/>
                                <label htmlFor="">summary :- </label>
                                <label htmlFor="">{emp.summary}</label><br/>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-ms-6 col-sm-6 col-xs-6 col-12">
                                    <button type="button" className="btn btn-primary" onClick={previousPage}>Previous</button>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-ms-6 col-sm-6 col-xs-6 col-12">
                                    <Popup trigger={<button onSubmit={onSubmit}  className="btn btn-success"> submit</button>} >
                                        <div className='card'>
                                            <label htmlFor="" id="popup-msg">Success</label>
                                        </div>
                                    </Popup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default ThirdPage;