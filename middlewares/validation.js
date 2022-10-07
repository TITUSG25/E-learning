const handleErrors =(err)=>{
    let errors ={userId: ``,password:""};
    console.log(err);
    if(err.message === "incorrect userId"){
        errors.userId="User Id is not valid"
    }
    if(err.message === "incorrect password"){
        errors.password = "User password is not valid"
    }
    if(err.code === 11000){
        errors.email = "Email is already registered"
        return errors;
    }
    if(err.message.includes("Users Validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        });
    }

    return errors;
}

export default handleErrors();