import React,{useState} from "react";
import {  TextField, Link, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import eLearning from "../images/eLearning.png";
import sight from "../images/sight.png";
import "../Login/LoginPage.css";
import SimpleImageSlider from "react-simple-image-slider";
import welcomePng from "../images/welcomePng.png";
import TextIcon1 from "../images/TextIcon1.png";
import TextIcon2 from "../images/TextIcon2.png";


const images = [
  require("../images/slide1.png"),
  require("../images/slide2.png"),
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
  
  const [userId,setuserID] = useState('')
  const [password,setPassword]=useState('');

  return (
    <>
      <div className="appBar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <div className="e_image">
                <img src={eLearning} alt="eLearning logo" />
              </div>
            </Toolbar>
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
              required
              onChange={e=>setuserID(e.target.value)}

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
             


            <TextField
              placeholder="  Enter your Password"
              onChange={e=>setPassword(e.target.value)}
              required
              style={textfield}
              name="password"
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
              }}
            />

            <div className="linkStyle">
              <Link href="#">Forgot Your Password?</Link>
            </div>
          </div>

          <Button style={button} variant="contained" >Contained</Button>
          
          
        </div>
        
        

        <div className="fullRight">
          <img src={sight} alt="sightspectrum" />
          <p>Welcome to Sight Spectrum's E - Learning platform</p>
          <SimpleImageSlider
            style={slideshowStyle}
            autoPlay
            height={300}
            width={600}
            images={images}
          />
          
        </div>
      </div>
    </>
  );
}
