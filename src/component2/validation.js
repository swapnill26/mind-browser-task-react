const validate = (value) => {
    
    const errors = {}
    if (!value.first_Name) {
      errors.first_Name = 'Required'
    }
    if (!value.last_Name) {
      errors.last_Name = 'Required'
    }
    // if (!values.email) {
    //   errors.email = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address'
    // }
    
    return errors
  }
  
  export default validate