import React from "react";
import { TextField, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import eLearning from "../images/eLearning.png";
import sight from "../images/sight.png";
import "../components/Userid.css";
import passwordimage from "../images/person1.png";
import TextIcon1 from "../images/TextIcon1.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

export default function Userid() {
  const textfield = {
    width: "466px",
    height: "46px",
    paddingTop: "35px",
    display: "flex",
  };

  const button = {
    width: "466px",
    borderRadius: "10px",
    marginTop: "50px",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    dispatch(loginStart());
    const { ...data } = values;
    const resp = await axios
      .post("http://localhost:8000/api/user/userId", data)
      .catch((err) => {
        dispatch(loginFailure(err.response.data.message));
      });
    dispatch(loginSuccess(resp.data));
    navigate("/Reset");
  };

  const validate = yup.object().shape({
    userId: yup.number().typeError("only number").required("Enter Userid"),
  });

  const formik = useFormik({
    initialValues: {
      userId: "",
    },
    validationSchema: validate,
    onSubmit,
  });

  return (
    <>
      <div className="appBar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="idappbar">
            <div className="e_image">
              <img src={eLearning} alt="eLearning logo" />
            </div>
          </AppBar>
        </Box>
      </div>
      <div className="fullBox">
        <div className="userfullLeft">
          <h1>Reset Your Password</h1>

          <div className="textfield" onSubmit={formik.handleSubmit}>
            <TextField
              style={textfield}
              name="userId"
              placeholder="  Enter your User ID"
              value={formik.values.userId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
            <h3 style={{ color: "red" }}>
              {formik.errors.userId && formik.touched.userId
                ? formik.errors.userId
                : ""}
            </h3>
          </div>

          <Button
            style={button}
            variant="contained"
            onClick={formik.handleSubmit}
          >
            click to Reset
          </Button>
        </div>

        <div className="fullRight">
          <img src={sight} alt="sightspectrum" />
          <p>Welcome to Sight Spectrum's E - Learning platform</p>
          <div className="password-pitcure">
            <img src={passwordimage} alt="sightspectrum" />
          </div>
        </div>
      </div>
    </>
  );
}
