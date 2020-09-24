import React from "react";
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                className="navbox"
            >
                <Grid item
                    xs={3}
                    className="navitem"
                >
                    <div>POSTBOOT</div>
                </Grid>
                <Grid item
                    xs={3}
                    className="navitem"

                >
                    <div>//\\</div>
                </Grid>
                <Grid item
                    xs={3}
                    className="navitem"
                >
                    <div>I / O</div>
                </Grid>
            </Grid>
        </div>
    );
}