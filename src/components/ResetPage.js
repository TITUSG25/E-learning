import React from "react";
import {  TextField, Link, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import eLearning from "../images/eLearning.png";
import sight from "../images/sight.png";
import '../components/ResetPage.css';
import * as yup from 'yup';
import { useFormik } from "formik";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import person from '../images/person1.png'



const textfield = {
  width: "466px",
  height: "46px",
  paddingTop: "35px",
  display: "flex",
};

const button={
  width:'466px' ,
  borderRadius:'10px',
  marginTop:'30px'

}

const cancelbutton={
  backgroundColor:'grey',
  width:'466px' ,
  borderRadius:'10px',
  marginTop:'30px'

}

const imgStyle={
  height:'auto',
  width:'70%',
  paddingTop:'0px',
  marginLeft:'0px'
}

export default function ResetPage() {

  const [values, setValues] = React.useState({
       
    password: '',
  
    showPassword: false,
  });


  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const onSubmit = () => {
    console.log("submitted");
  };

  const lcase = /(?=.*[a-z])/;
  const ucase = /(?=.*[A-Z])/;
  const numeric = /(?=.*[0-9])/;
  

  const validate = yup.object().shape({
    Password: yup.string()
      .required("Enter Password")
      .matches(ucase, "One Uppercase must")
      .matches(lcase, "One Lowercase must")
      .matches(numeric, "One numeric must")

      .min(8, "Password must be above 5 character")
      .max(13, "Password must be below 10 character"),

      PasswordConfirm: yup.string()
        .oneOf([yup.ref('Password')], 'Password must be the same!')
        .required('Enter Confirm Password')
  });

  const formik = useFormik({
    initialValues: {
      Password:"",
      PasswordConfirm:"",
    },
    validationSchema: validate,
    onSubmit,
  });
  console.log(formik.errors);


  return (
    <>
        <div className="re-appbar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="tbl">
              <div className="e_image">
                <img src={eLearning} alt="eLearning logo" />
              </div>
          </AppBar>
        </Box>
        </div>
      

      <div className="fullBox">
        <div className="refullLeft">
        
          <div className="textfiled" onSubmit={formik.handleSubmit}>
          <h2>RESET PASSWORD</h2>
            <TextField
              style={textfield}
              name="Password"
              value={formik.values.Password} onChange={formik.handleChange}
              onBlur={formik.handleBlur}

              placeholder="  Enter your New Password"
            />
             <h3 style={{color:'red'}}>{formik.errors.Password && formik.touched.Password? formik.errors.Password:""}</h3>


            <TextField
              placeholder=" Confirm your New Password"
              value={formik.values.PasswordConfirm} onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              style={textfield}
              name="PasswordConfirm"
              type={values.showPassword ? 'text' : 'password'}
              InputProps={{
               endAdornment:(<InputAdornment position="end"> <IconButton
                aria-label="toggle password visibility"
                
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton> </InputAdornment>)
               }} 
            />
            <h3 style={{color:'red'}}>{formik.errors.PasswordConfirm && formik.touched.PasswordConfirm? formik.errors.PasswordConfirm:""}</h3> 
          </div>

          <Button style={button} variant="contained" onClick={formik.handleSubmit}>Save</Button>

          <Button style={cancelbutton} variant="contained" >Cancel</Button>


          <div className="linkStyle">
              <Link href="/">Back to Login</Link>
            </div>
          
        </div>
        
        

        <div className="fullRight">
          <img src={sight} alt="sightspectrum" />
          <p>Welcome to Sight Spectrum's E - Learning platform</p>
          <img src={person} alt='person' style={imgStyle}></img>
        </div>
      </div>
    </>
  );
}
