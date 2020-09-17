import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: 't#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: 'red',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: 'red',
    },
  },
  fontcolor: {
      color: 'white',
  },
}));

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}


function ProfileSettings (){
    const classes = useStyles();


    return (
        
        <div className = "Profile-settings">
            
            <img src={'https://pngimg.com/uploads/illuminati/illuminati_PNG1.png'} alt='triangle' height='500px' width='620px'/>
            <Button component={Link} to="/memberdashboard" color="inherit">Member Dashboard</Button>
            
            <Typography>
              <h1>Profile Settings</h1>
          </Typography>
        <FormControl component="fieldset">
          <RadioGroup defaultValue="noob" aria-label="gender" name="customized-radios">
            <FormControlLabel value="noob" control={<StyledRadio />} label="Noob" />
            <FormControlLabel value="intermediate" control={<StyledRadio />} label="Intermediate" />
            <FormControlLabel value="Expert" control={<StyledRadio />} label="Expert" />
            <FormControlLabel
              value="master"
              disabled
              control={<StyledRadio />}
              label="Master (We do not grant you this rank)"
            />
          </RadioGroup>
        </FormControl>
        </div>
       
      )
};

export default ProfileSettings;