import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";




function MemberDashboard (){

  


    return (
        
        <div className = "Profile-settings">
            
            {/* <img src={'https://pngimg.com/uploads/illuminati/illuminati_PNG1.png'} alt='triangle' height='500px' width='620px'/> */}
            <Button component={Link} to="/profilesettings" color="inherit">Profile Settings</Button>
            
            <Typography>
              <h1>Member Dashboard</h1>
          </Typography>
        </div>
       
      )
};

export default MemberDashboard;