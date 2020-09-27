import React from "react";
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";

function DraftNavDeleteMeLater() {


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/members" color="inherit"> Members</Button>
          <Button component={Link} to="/memberdashboard" color="inherit">Member Dashboard</Button>
          <Button component={Link} to="/profilesettings" color="inherit">Profile Settings</Button>
          <Button component={Link} to="/splashpage" color="inherit">Splash Page</Button>
          <Button component={Link} to="/projects" color="inherit">Projects</Button>

                    {/* ADD MORE PAGES HERE */}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default DraftNavDeleteMeLater;