import * as React from 'react';
import Box from '@mui/material/Box';
import '../Dashboard/Middesign.css'
import {Typography,Avatar,Grid} from '@mui/material';
import Paper from '@mui/material/Paper';
import p1 from '../images/paper1.png';
import StarRateIcon from '@mui/icons-material/StarRate';
import e from '../images/ee.png';
import s from '../images/second.png';
import axios from 'axios';
import  ChartDesign from '../Dashboard/OverallPerformance';
import PdfCourse from './PdfCourse';




const paper={
    width:"460px ",
    height:"80px",
    marginTop:"7px",
    marginLeft:"25px",
    position:"absolute",
    backgroundColor:"rgb(231, 235, 240)",
}

const backpaper={
    border: "1px solid",
    marginTop:"60px",
    borderColor: "#C1D8ED",
    height: "95px",
    width: "510px",
    overflowY:"auto",

}

const trendsecondhead={
  marginTop:"25px",
  fontSize:"9px",
  fontWeight:"500px"
}

export default function ButtonAppBar() {



  const coursestrend = async (values) => {
    const { ...data } = values;
    await axios  
      .get("http://localhost:8080/api/user/getcourses", data)
      .catch((err) => {
        if(err)   console.log(err.response.data.message);
     
      });
      alert("course created");
  };
    var myDate = new Date();
    var hours= myDate.getHours();
    var greet;

    if (hours < 12)
        greet =  "Morning !";
    else if (hours >= 12 && hours <= 12)
        greet = "Afternoon !";
    else if (hours >= 15 && hours <= 24)
        greet = "Evening !";


  return (
    <div className='mid-design'>

    <Grid container className="tit">
        <Grid item xs={5}>
          <div className="title-design">
            <Typography id="good-mrng"><span>Good {greet}</span></Typography>

            <p className="title-content">
              Welcome to Sight Spectrum’s E - Learning Platform
            </p>

            <p id="title-button">
              <button id="btn">Browse Course</button>
            </p>
          </div>
        </Grid>

        <Grid item xs={5}>
            <div className="imgWelcome">
            <img src={e} id='e-icon'alt='img'></img>

            <img src={s}  height="180px" style={{ marginTop: "4px" }} alt='img'></img>

            </div>

        </Grid>
      </Grid>



      <div className='trend-typo'>
      <h2 id='trend-head'>Trending Courses</h2>
      </div>

     <div className='trending-course'>
    
     <div id='trend-box'>
     <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
             
              width: 250,
              height: 111,
            },
          }}
        >
          <Paper elevation={3}>
         
          
              <Typography className="trend-program">Java Programming</Typography>
            <div className="fun">
              <h5 style={trendsecondhead}>Java Programming & fundamental....</h5>
            </div>
            <div className="trending">
             <div className="float-left">
                <Avatar className="avatar-java-circle"> </Avatar>
              </div>
              <div className="float-right">
                 <h4 className="content">Trainer Full Name</h4>
                 <Typography  id='email'>Sample@gmail.com</Typography>
                 <Typography id='re-view'>(182 Reviews)<span><StarRateIcon id='java-star'/></span><span id='java-num'>4.5/5</span></Typography>
                 <button variant="contained" id='java-btn'>Get Course</button>
              </div>
            </div>
           
          
            
          </Paper> 
        </Box>
        </div>
        </div>


    <div className='suggest'>
     <h2 className='suggest-head'>Suggested Course</h2>
       <select id='suggest-select'>
        <option>Course</option>
       </select>
     
        <Paper elevation={10} style={backpaper}>
        <Paper elevation={10} style={paper}>
       <Box sx={{ display: 'flex',
        flexDirection:'column',
        flexWrap: 'wrap',
        '& > :not(style)': {
          marginTop: 1,
          width: 460,   
          height: 66,
          borderRadius: 5,
        },
      }}
    >
      
      <Paper  elevation={5}>
        <div className='suggest-paper'>
       <div className='suggest-paperleft'>
       <img src={p1} alt='p1' className='p1-img'></img>
       </div>
       <div className='suggest-paperright'>
         <Typography id='paper-text'>Art & Illustration</Typography>
         <Typography id='paper-text1'>Illustration Course Master Class</Typography>
         <Avatar id='suggest-avatar'> </Avatar>
        <Typography id='suggest-avatar-text'>Trainer Name</Typography>
        <p id='suggest-publish'>Publish on 28/10/2022</p>
        <div>
         <span><StarRateIcon id='suggest-star'/><span id='suggest-num'>5.0</span></span>
         <Typography id='suggest-rate'>80 ratings</Typography>  
        </div>
       </div>
       </div>
      </Paper>
      </Box>
      </Paper>
     </Paper>


     

    

    </div>

    

    <ChartDesign/>

    <PdfCourse/>

    


  
    
   </div>

   


   
  );
}
