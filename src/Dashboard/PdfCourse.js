import React from "react";
import Box from "@mui/material/Box";

import { Typography, Avatar, Grid, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import StarRateIcon from "@mui/icons-material/StarRate";
import pdf from "../images/pdf pic.png";
import "../Dashboard/pdfstyle.css";
import downloadicon from "../images/download icon.png";
import { HiDownload } from "react-icons/hi";

function PdfCourse() {
  const paper = {
    width: "460px ",
    height: "80px",
    marginTop: "7px",
    marginLeft: "25px",
    position: "absolute",
    backgroundColor: "rgb(231, 235, 240)",
  };

  const backpaper = {
    border: "1px solid",
    marginTop: "60px",
    borderColor: "#C1D8ED",
    height: "95px",
    width: "510px",
    overflowY: "auto",
  };

  return (
    <div className="Download-course">
      <h2 className="Down-head">Download Your Course Guide  </h2>
      <select id="Down-select">
        <option>Course</option>
      </select>

      <Paper elevation={10} style={backpaper}>
        <Paper elevation={10} style={paper}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              "& > :not(style)": {
                marginTop: 1,
                width: 460,
                height: 66,
                borderRadius: 5,
              },
            }}
          >
            <Paper elevation={5}>
              <div className="Down-paper">
                <div className="Down-paperleft">
                  <img src={pdf} alt="p1" className="p1-img"></img>
                </div>
                <div className="Down-paperright">
                  <Typography id="pdf-text">Art & Illustration</Typography>
                  <Typography id="pdf-text1">
                    Illustration Course Master Class{" "}
                  </Typography>
                  <Avatar id="Down-avatar"> </Avatar>
                  <Typography id="Down-avatar-text">Trainer Name</Typography>
                  <p id="Down-publish">Publish on 28/10/2022</p>
                  <div>
                    <div>
                      <button id="pdf-button">
                        <span className="pdf-icon">
                          <img src={downloadicon}></img>
                        </span>
                        Download file
                      </button>
                    </div>
                    <span>
                      <Typography id="Down-rate">
                        (6822 Reviews)
                        <span>
                          <StarRateIcon id="Down-star" />
                        </span>
                        <span>
                          <p id="ratings">4/5</p>
                        </span>
                      </Typography>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </Paper>
          </Box>
        </Paper>
      </Paper>
    </div>
  );
}

export default PdfCourse;
