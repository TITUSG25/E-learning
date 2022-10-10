import React from "react";
import {  TextField, Link, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import '../components/LoginPage.css'
import eLearning from "../images/eLearning.png";
import sight from "../images/sight.png";
import SimpleImageSlider from "react-simple-image-slider";
import welcomePng from "../images/welcomePng.png";
import TextIcon1 from "../images/TextIcon1.png";
import TextIcon2 from "../images/TextIcon2.png";
import * as yup from 'yup';
import { useFormik } from "formik";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';



const images = [
  require("../images/slide1.png"),
  require("../images/slide2.png"),
  require("../images/slide3.png")
];
const slideshowStyle = {
  background: "none",
  display: "flex",
  flexDirection: "row",
};

const textfield = {
  width: "466px",
  height: "46px",
  paddingTop: "35px",
  display: "flex",
};

const button={
  width:'466px' ,
  borderRadius:'10px',
  marginTop:'10px'

}

export default function ButtonAppBar() {

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

  

  const validate = yup.object().shape({
    Userid: yup.number("only").typeError("only number").required("Enter Userid"),
    Password: yup
      .string()
      .required("Enter Password")
      
  });

  const formik = useFormik({
    initialValues: {
      Userid:"",
      Password: "",
    },
    validationSchema: validate,
    onSubmit,
  });
  console.log(formik.errors);

 


  return (
    <>
      <div className="appBar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="appColor">
           
              <div className="e_image">
                <img src={eLearning} alt="eLearning logo" />
              </div>
            
          </AppBar>
        </Box>
      </div>

      <div className="fullBox">
        <div className="fullLeft">
          <img src={welcomePng} alt="welcome" />
  
          <div className="textfiled" onSubmit={formik.handleSubmit}>
            <TextField
              style={textfield}
              name="Userid"
              value={formik.values.Userid} onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="  Enter your User ID"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={TextIcon1}
                      alt="logo"
                      style={{ color: "blue", height: "25px", width: "30px" }}
                    />
                  </InputAdornment>
                ),
              }
            }
            />
             <h3 style={{color:'red'}}>{formik.errors.Userid && formik.touched.Userid? formik.errors.Userid:""}</h3>



            <TextField
              placeholder="  Enter your Password"
              value={formik.values.Password} onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              style={textfield}
              name="Password"
              type={values.showPassword ? 'text' : 'password'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={TextIcon2}
                      alt="logo"
                      style={{ color: "blue", height: "25px", width: "30px" }}
                     />
                  </InputAdornment>
                ),
               endAdornment:(<InputAdornment position="="end> <IconButton
                aria-label="toggle password visibility"
                
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton> </InputAdornment>)
               }} 
            />
            <h3 style={{color:'red'}}>{formik.errors.Password && formik.touched.Password? formik.errors.Password:""}</h3>


            <div className="linkStyle">
              <Link href="/User">Forgot Your Password?</Link>
            </div>
          </div>


          <Button style={button} variant="contained" onClick={formik.handleSubmit}>Login</Button>  
        </div>
        
        

        <div className="fullRight">
          <img src={sight} alt="sightspectrum" />
          <p>Welcome to Sight Spectrum's E - Learning platform</p>
          <SimpleImageSlider
            style={slideshowStyle}
            autoPlay
            height={400}
            width={600}
            images={images}
          />
          
        </div>
      </div>
    </>
  );
}
