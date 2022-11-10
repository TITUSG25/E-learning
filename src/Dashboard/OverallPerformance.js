import React from "react";
import "../Dashboard/overallstyle.css";
import { Grid, Paper, Box, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import e1 from "../images/Ellipse 43.png";

import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from "@devexpress/dx-react-chart-material-ui";

import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const useStyles = makeStyles({
  root: {
    "& .css-i4bv87-MuiSvgIcon-root": {
      fontSize: "1rem",
    },
    "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
      height: "32px",
      width: "105px",
      fontSize: "9px",
     
    },
    "& .css-169iwlq-MuiCalendarPicker-root":{
      width:'30px',
      
    }
  
  },
});



function ChartsDesign() {

  const [value, setValue] = React.useState(dayjs);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  const data = [
    { argument: "jan", value: "10%" },
    { argument: "Feb", value: "20%" },
    { argument: "Mar", value: "30%" },
    { argument: "Apr", value: "40%" },
    { argument: "May", value: "50%" },
    { argument: "Jun", value: "60%" },
  ];
  return (
    <div>

<h2 id="headchart">Overall Performance </h2>
      
      <Grid container >
        
     
        <Grid item xs={6}>
       
          <div className="Overal-perform">
            <div className="chart-design">
              <Chart height={260} width={250} data={data}>
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries valueField="value" argumentField="argument" />
              </Chart>
            </div>

            <div className="inner-ryt">
              <Grid container>
                <Grid item xs={12}>
                  <div className="date">
                    <div className="startDate">
                      {" "}
                      <label>Start Date</label>
                    </div>

                    <div className="endDate">
                      {" "}
                      <label>End Date</label>
                    </div>
                  </div>

                  <div className="start-date">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack>
                        <DesktopDatePicker
                          className={classes.root}
                          
                          inputFormat="MM/DD/YYYY"
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack>
                        <DesktopDatePicker
                          className={classes.root}
                          inputFormat="MM/DD/YYYY"
                        
                          value={value}
                          onChange={handleChange}
                          
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </div>

                  <>
                    <p id="head">Boost your Performance </p>
                  </>
                </Grid>
              </Grid>

              <div className="BOXE">
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    justifyContent: "center",
                    "& > :not(style)": {
                      marginTop: 0.55,
                      width: 200,
                      height: 44,
                      background: "#DEE8F5",
                    },
                  }}
                >
                  <Paper elevation={2}>
                    <div className="list">
                      <div className="left-list">
                        <img className="icon" alt="Avatar"  src={e1}></img>

                        <p id="text1">Beginner Level </p>

                        <p id="text2">
                          {" "}
                          3 Levels - 40 Questions - Free Certification{" "}
                        </p>
                      </div>

                      <div className="right-list">
                        <button id="btn-text">Start Test </button>
                      </div>
                    </div>
                  </Paper>

                  <Paper elevation={2}>
                    <div className="list">
                      <div className="left-list">
                        <img className="icon"  alt="image2"  src={e1}></img>

                        <p id="text1">Beginner Level </p>

                        <p id="text2">
                          {" "}
                          3 Levels - 40 Questions - Free Certification{" "}
                        </p>
                      </div>

                      <div className="right-list">
                        <button id="btn-text">Start Test </button>
                      </div>
                    </div>
                  </Paper>

                  <Paper elevation={2}>
                    <div className="list">
                      <div className="left-list">
                        <img className="icon" alt="image1"  src={e1}></img>

                        <p id="text1">Beginner Level </p>

                        <p id="text2">
                          {" "}
                          3 Levels - 40 Questions - Free Certification{" "}
                        </p>
                      </div>

                      <div className="right-list">
                        <button id="btn-text">Start Test </button>
                      </div>
                    </div>
                  </Paper>
                </Box>
              </div>
              <div className="leaderboard">
                <a href="lead">See Overall Leaderboard </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChartsDesign;