import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography, Avatar, TextField } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import eLearning from "../images/eLearning.png";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AiOutlineUser } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import "../Dashboard/Boardappbar.css";





function Boardappbar() {
  const [openfirst, setOpenfirst] = React.useState(true);

  const handleClickfirst = () => {
    setOpenfirst(!openfirst);
  };
  const [opensecond, setOpensecond] = React.useState(true);

  const handleClicksecond = () => {
    setOpensecond(!opensecond);
  };
  const [openthird, setOpenthird] = React.useState(true);

  const handleClickthird = () => {
    setOpenthird(!openthird);
  };

  
    
  return (
    <>
      <div className="board">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="board-appbar">
            <Toolbar>
              <div className="e-board">
                <img src={eLearning} alt="eLearning logo" />
              </div>
              <div className="left-content">
              <div className="left-expand">
                <ListItemButton onClick={handleClickfirst}>
                  <Typography >Course</Typography>
                  {openfirst ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                </div>
                
                <div>
                <ListItemButton onClick={handleClicksecond}>
                <Typography className="left-expand">Skill<span id='sd'>Development</span> </Typography>
                  {opensecond ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                </div>

                <div>
                <ListItemButton onClick={handleClickthird}>
                <Typography className="left-expand">News<span id='sd'>Feed</span></Typography>               
                   {openthird ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                </div>
              </div>

              

              <div className="right-content">
                <div className="leader-board">
                <LeaderboardOutlinedIcon id='leader-icon'/>
                Leader <span id='sd'>Board</span> 
                </div>
                <div className="mid">
                  <div className="searchIcon">
                    <input type='text' placeholder="Search course"></input>
                  </div>
                </div>
                <Badge badgeContent={2} className="badge" color="success">
                  <NotificationsIcon />
                </Badge>

                <div className="right-hello">
                <Typography className="hello">Hello,<span>User</span></Typography>
                </div>

                <div className="avatar">
                  <Avatar
                    variant="dot"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <AiOutlineUser className="avatar-icon" />
                  </Avatar>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
}

export default Boardappbar;
