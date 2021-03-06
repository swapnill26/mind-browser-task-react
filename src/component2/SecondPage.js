import React, { Fragment , useState } from 'react'
import ProgressBar from '../../node_modules/react-bootstrap/ProgressBar'
import  validate from './validate';

function SecondPage({onSubmit,prevPage,emp,onChange}) {
    const [error,setError]=useState({})

    const sub=async(e)=>{
        e.preventDefault();       
        let errorData=await validate(emp);
        setError(errorData)
        if(errorData.company && errorData.company!==''){
            console.log('error');
        }else if(errorData.job && errorData.job !==''){
            console.log('error');
        }else if(errorData.linkedin && errorData.linkedin!==''){
            console.log('error');
        }else if(errorData.github && errorData.github!==''){
            console.log('error');
        }else{
            onSubmit()
        }

    }

    return (
        <Fragment>
            <div className="container">
                <label htmlFor="" id='progress'>Progress ......</label>
                <ProgressBar className="progress" now={60} label={60} />
                <form onSubmit={e=>sub(e)}>
                    <div className="card">
                        <div className="card-header">About Info</div>
                        <div className="card-body">
                        <div className="container row form-group">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                <label htmlFor="">company</label>
                                <input type="text"
                                 className="form-control"
                                 name="company"
                                 placeholder="Enter company Name"
                                 value={emp.company}
                                 onChange={e=>onChange(e)}
                                 />
                                 <span id="error">{ error.company}</span>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                <label htmlFor="">Job title</label>
                                <input type="text"
                                 className="form-control"
                                 name="job_title"
                                 placeholder="Enter Job title"
                                 value={emp.job_title}
                                 onChange={e=>onChange(e)}
                                 />
                                 <span id="error">{ error.job}</span>
                            </div>
                        </div>
                        <div className="container row form-group">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                    <i className="fa fa-linkedin"/>
                                    <input type="text"
                                    className="form-control"
                                    name="linkedin"
                                    placeholder="Enter linkedin link"
                                    value={ emp.linkedin }
                                    onChange={e=>onChange(e)}
                                    />
                                    <span id="error">{ error.linkedin }</span>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                    <i className="fa fa-github"/>
                                    <input type="text"
                                    className="form-control"
                                    name="github"
                                    placeholder="Enter github link"
                                    value={emp.github}
                                    onChange={e=>onChange(e)}
                                    />
                                    <span id="error">{ error.github }</span>
                                </div>
                            </div>
                            <div className="container  form-group">
                                <label htmlFor="">expertise in react</label>
                                <div className="row">
                                    <div className="col-xl-2"> 
                                        <label htmlFor="">Beginner</label>
                                    </div>
                                    <div className="col-xl-8">
                                        <input 
                                        type='range'
                                        name='expertise_in_react'
                                        className="form-control"
                                        value={emp.expertise_in_react}
                                        onChange={e=>onChange(e)}
                                        required
                                        />
                                    </div>
                                    <div className="col-xl-2">
                                        <label htmlFor="">Expert</label>
                                    </div>
                                </div>
                            </div>
                            <div className="container row form-group">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                    <label htmlFor="">Summary</label>
                                    <textarea 
                                    className="form-control"
                                    name="summary"
                                    placeholder="Enter Summary"
                                    value={emp.summary}
                                    onChange={e=>onChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="container row form-group">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                    <button type="button" className="btn btn-primary" onClick={prevPage}>Previous</button>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                    <button type="submit" className="btn btn-primary">Next</button>
                                </div>
                            </div>
                        </div> 
                        </div>       
                </form>
            </div>
        </Fragment>
    )
}

export default SecondPage
