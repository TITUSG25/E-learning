import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import '../Dashboard/Coursemenu.css'
import { Divider, Typography,Button } from '@mui/material';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import achieve from '../images/achievement.png';
import perform from '../images/perform.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 



function Coursemenu() {
    
  return (
    <div className='menu'>
 <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          
          width: 230,
          height: 800,
        },
      }}
    >
      
      <Paper elevation={3} > 
  

        <List>
          <div>
         <h3 className='menu-firsthead'>Menu</h3>
         </div>

         <div className='menu-list'>
          <ListItemButton>
            <ListItemIcon className='menu-icon'>
                <DashboardOutlinedIcon/>
            </ListItemIcon>
            <Typography className='menu-text'>Dashboard</Typography>
            </ListItemButton>

            <ListItemButton>
            <ListItemIcon className='menu-icon'>
              <img src={perform} alt='perform' className='perform'></img>
            </ListItemIcon>
            <Typography className='menu-text'>Performance</Typography>
            </ListItemButton>

            <ListItemButton>
            <ListItemIcon className='menu-icon'>
                <AssignmentTurnedInOutlinedIcon/>
            </ListItemIcon>
            <Typography className='menu-text'>Assesment</Typography>
            </ListItemButton>    
             
            <ListItemButton>
            <ListItemIcon className='menu-icon'>
                <AccountBoxOutlinedIcon/>
            </ListItemIcon>
            <Typography className='menu-text'>Tutorials</Typography>
            </ListItemButton>   

            <ListItemButton>
            <ListItemIcon className='menu-icon'>
                <VideoLibraryIcon/>
            </ListItemIcon>
            <Typography className='menu-text'>Saved Classes</Typography>
            </ListItemButton>   

            <ListItemButton>
            <ListItemIcon className='menu-icon'>
                <img src={achieve} alt='achieve' className='achieve'></img>
            </ListItemIcon>
            <Typography className='menu-text'>Achivement</Typography>
            </ListItemButton>
            </div>

            <Divider className='divider'/> 
            <div>
         <h3 className='menu-secondhead'>Recently Uploaded</h3>
         </div>
         <div className='recent-upload'> 
         <h3 className='ux'>UX research
            <span className='view'>(122 Reviews)<StarTwoToneIcon className='ux-star'/></span>
         <span className='number'>3.5/5</span></h3>
         </div> 
         <div className='recent-upload2'> 
         <h3 className='ux2'>IoT basics
            <span className='view2'>(12 Reviews)<StarTwoToneIcon className='ux-icon'/></span>
         <span className='number2'>4.5/5</span></h3>
         </div> 

         <Divider className='divider-2'/>
         <div className='menu-suggest'>
         <h3 className='menu-thirdhead'>Suggestions</h3>
        <button className='btn-ud'>Ui<span id='menu-suggest-btn'>Design</span></button>
         <button className='btn-android'>Android Development</button>
        <span><button className='btn-ios'>IOS</button><button className='btn-java'>Java</button></span> 
        <button className='btn-web'>Web Designing</button>
         </div>
         

        </List>
        </Paper>
        </Box>
    </div>
   
  )
}

export default Coursemenu