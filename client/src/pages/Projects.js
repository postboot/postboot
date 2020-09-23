import React from 'react';
import { Container, Grid } from '@material-ui/core';

function Projects() {



    return (
        <>
            <Container>
                <Grid container
                    direction="row"
                    spacing={10}>
                    <Grid item xs={4}>
                            <img src="triangle.swaddle.png" />
                    </Grid>
                    <Grid item xs={4}>
                            <img src="triangle.postboot.png" />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
};

export default Projects;