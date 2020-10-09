import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));



function MemberDashboard (){

  const classes = useStyles();


    return (
           <div className={classes.root}>
             <div className = "Profile-settings">
      <Grid container spacing={12}>
      <Button variant="contained" size="large" color="primary" className={classes.margin} component={Link} to="/profilesettings">Profile Settings</Button>
      </Grid>
      <Grid container spacing={12}>
      <Button variant="contained" size="large" color="primary" className={classes.margin} component={Link} to="/profilesettings">Projects</Button>
      </Grid>
    </div>
            
        </div>
       
      )
};

export default MemberDashboard;