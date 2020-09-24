const validate=(emp)=>{
   const errors={}
   const date= new Date(); 
   const date1=new Date(emp.dob)
   

    if(!emp.first_name){
        errors.first_name='first name is required'
    }else if (!/^[A-Za-z ]+$/i.test(emp.first_name)) {
        errors.first_name='use char'
    }

    if(!emp.last_name){
        errors.last_name='last name is required'
    }else if (!/^[A-Za-z ]+$/i.test(emp.last_name)) {
        errors.last_name='use char'
    }

    if(!emp.mobile){
        errors.mob="mobile Number is Required"
    }else if (/^[0][1-9]{1}[0-9]{9}$/.test(emp.mobile)) {
        errors.mob='use number'
    }else if(emp.mobile.length!==10){
        errors.mob='use 10 numbers only'
    }
    if(!emp.email){
        errors.email="Email is Required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emp.email)) {
        errors.email = 'Invalid email address'
    }
    if(!emp.city){
        errors.city="City is Required"
    }
    if(!emp.dob){
        errors.dob="PLz select date"
    }
    if(date<date1){
       errors.dob="PLz select right date "
    }
    if(!emp.company){
        errors.company="Company is required"
    }
    if(!emp.job_title){
        errors.job="Job Title is required"
    }
    if(!emp.linkedin){
        errors.linkedin="LinkedIn profile link in required"
    }
    if(!emp.github){
        errors.github="GitHub link is required"
    }
   
    return errors
}

export default validate;