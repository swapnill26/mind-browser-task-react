import React, { Fragment ,useState} from 'react';
import ProgressBar from '../../node_modules/react-bootstrap/ProgressBar';
import  validate from './validate';

function FirstPage({onSubmit,emp,onChange}) { 
    const [error,setError]=useState({})

    const sub=async(e)=>{
        e.preventDefault();       
        let errorData=await validate(emp);
        setError(errorData)
        if(errorData.last_name && errorData.last_name!==''){
            console.log('error');
        }else if(errorData.first_name && errorData.first_name!=='' ){
            console.log('error');
        }else if(errorData.mob && errorData.mob!==''){
            console.log('error');
        }else if(errorData.email && errorData.email!==''){
            console.log('error');
        }else if(errorData.city && errorData.city!==''){
            console.log('error');
        }else if(errorData.dob && errorData.dob!==''){
            console.log('error');
        }
        else{
            onSubmit()
        }
    }
    

    return (
        <Fragment>
            <div className="container">
            <label htmlFor="" id='progress'>Progress ......</label>
                <div className='progress'>
                    <ProgressBar now={0} label={0} />
                </div>
                <form onSubmit={e=>sub(e)}>
                    <div className="card">
                        <div className="card-header">Basic Info</div>
                        <div className="card-body">
                        <div className="container row form-group">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                <label htmlFor="">First Name</label>
                                <input type="text"
                                 className="form-control"
                                 name="first_name"
                                 placeholder="Enter first Name"
                                 value={emp.first_name}
                                 onChange={e=>onChange(e)}
                                 />
                                <span id="error">{ error.first_name  }</span>                     
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                <label htmlFor="">Last Name</label>
                                <input type="text"
                                 className="form-control"
                                 name="last_name"
                                 placeholder="Enter first Name"
                                 value={emp.last_name}
                                 onChange={e=>onChange(e)}
                                 />
                                 <span id="error">{ error.last_name }</span>
                            </div>
                        </div>
                        <div className="container row form-group">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                <label htmlFor="">Mobile</label>
                                <input type="text"
                                 className="form-control"
                                 name="mobile"
                                 placeholder="Enter Mobile"
                                 value={emp.mobile}
                                 onChange={e=>onChange(e)}
                                 />
                                 <span id="error">{error ? error.mob : null }</span>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                <label htmlFor="">Email</label>
                                <input type="text"
                                 className="form-control"
                                 name="email"
                                 placeholder="Enter Email"
                                 value={emp.email}
                                 onChange={e=>onChange(e)}                               
                                 />
                                 <span id="error">{error ? error.email : null }</span>
                            </div>
                        </div>
                        <div className="container row form-group">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                <label htmlFor="">city</label>
                                <select name="city"  value={emp.city} onChange={e=>onChange(e)} className="form-control" >
                                    <option value="kolhapur">kolhapur</option>
                                    <option value="Pune">Pune</option>
                                    <option value="mumbai">mumbai</option>
                                    <option value="satara">satara</option>
                                </select>
                                <span id="error">{error ? error.city : null }</span>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12">
                                <label htmlFor="">DOB</label>
                                <input type="date"
                                 className="form-control"
                                 name="dob"
                                 value={emp.dob}
                                 onChange={e=>onChange(e)}
                                 />
                                 <span id="error">{error ? error.dob : null }</span>
                            </div>
                        </div>
                        <input type="submit"  className="btn btn-primary" value="next"  /> 
                    </div>
                    </div>  
                </form>
            </div>
        </Fragment>
    )
}



export default FirstPage