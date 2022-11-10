import React from 'react';
import Boardappbar from './Boardappbar';
import Coursemenu from './Coursemenu';
import '../Dashboard/Dashboard.css';
import Middesign from '../Dashboard/Middesign'

function Dashboard() {
  return (
    <div className='dashboard'>
       <div className='top'>
             <Boardappbar/>
       </div>
        <div className='left-dashboard'>
            <Coursemenu/>
       </div>
       <div className='right-dashboard'>
          <Middesign/>
       </div> 
    </div>
  )
}

export default Dashboard