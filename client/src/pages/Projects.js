import React from 'react';
import { Container, Grid } from '@material-ui/core';

function Projects() {



    return (
        <>
            <Grid container
                direction="row"
                className="projectscontainer"
            >
                <Grid item
                    xs={4}
                    className="projectsitem"
                >
                    <img src="triangle.swaddle.png" />
                    <div>hi</div>
                </Grid>
                <Grid item
                    xs={4}
                    className="projectsitem"

                >
                    <img src="triangle.postboot.png" />
                </Grid>
            </Grid>
        </>
    )
};

export default Projects;