import React from 'react';
import { Container, Typography } from '@material-ui/core';
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



function MemberDashboard() {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <div className="Profile-settings">
        <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img src="https://i.pinimg.com/originals/9f/04/da/9f04dab06c3b7803a4142c17065e259d.jpg"></img>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" size="large" color="primary" className={classes.margin} component={Link} to="/profilesettings">Profile Settings</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" size="large" color="primary" className={classes.margin} component={Link} to="/profilesettings">Projects</Button>
        </Grid>
        </Grid>
        </Container>
      </div>

    </div>

  )
};

export default MemberDashboard;