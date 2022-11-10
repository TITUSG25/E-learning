import React, { useState } from "react";
import { TextField, Link, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import "../components/LoginPage.css";
import eLearning from "../images/eLearning.png";
import sight from "../images/sight.png";
import SimpleImageSlider from "react-simple-image-slider";
import welcomePng from "../images/welcomePng.png";
import TextIcon1 from "../images/TextIcon1.png";
import TextIcon2 from "../images/TextIcon2.png";
import * as yup from "yup";
import { useFormik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const images = [
  require("../images/slide1.png"),
  require("../images/slide2.png"),
  require("../images/slide3.png"),
];
const slideshowStyle = {
  background: "none",
  display: "flex",
  flexDirection: "row",
};

const textfield = {
  width: "466px",
  height: "46px",
  paddingTop: "40px",
  display: "flex",
};

const button = {
  width: "466px",
  borderRadius: "10px",
  marginTop: "10px",
};

export default function ButtonAppBar() {
  const [points, setPoints] = React.useState({
    password: "",

    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPoints({
      ...points,
      showPassword: !points.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const[errmessage,setErrmessage]=useState(null);
  const[success,setSuccess]=useState(null);
  const navigate=useNavigate();

  const onSubmit = async (values) => {
    const { ...data } = values;
    const response = await axios  
      .post("http://localhost:8080/api/user/signin", data)
      .catch((err) => {
        if(err)
        setErrmessage(err.response.data.message);
        setSuccess(null)
      });
      if(response){
      setErrmessage(null)
        setSuccess(`${data.userId} ${response.data}`);
        setTimeout(()=>{
          navigate('/Dashboard')
        },2000)
      }
  };

  const validate = yup.object().shape({
    userId: yup
      .number("only")
      .typeError("only number")
      .required("Enter userId"),
    password: yup.string().required("Enter Password"),
  });

  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
    },
    validationSchema: validate,
    validateOnBlur: true,
    onSubmit,
  });

  
  return (
    <>
      <div className="appBar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="appcolor">
            <div className="e_image">
              <img src={eLearning} alt="eLearning logo" />
            </div>
          </AppBar>
        </Box>
      </div>

      <div className="fullBox">
        <div className="fullLeft">
          <img src={welcomePng} alt="welcome" />
          <div className="textfiled">
            <TextField
              style={textfield}
              name="userId"
              value={formik.values.userId}
              onChange={formik.handleChange}
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
              }}
            />
            <h4>
              {formik.errors.userId && formik.touched.userId
                ? formik.errors.userId
                : ""}
            </h4>
            <TextField
              placeholder="  Enter your Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={textfield}
              name="password"
              type={points.showPassword ? "text" : "password"}
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
                endAdornment: (
                  <InputAdornment position="=" end>
                    {" "}
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {points.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>{" "}
                  </InputAdornment>
                ),
              }}
            />
            <h4>
              {formik.errors.password && formik.touched.password
                ? formik.errors.password
                : ""}
            </h4>
            <div className="linkStyle">
              <Link href="/User">Forgot Your Password?</Link>
            </div>
          </div>
          <Button style={button} variant="contained" onClick={formik.handleSubmit} >
           Login
          </Button>

          <span className="success">{!errmessage && success?success:""}</span>
          <span className="error">{!success && errmessage?errmessage:""}</span>
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
