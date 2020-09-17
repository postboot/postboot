import React from "react";
import { Container, Paper, Typography, Grid } from "@material-ui/core";

function Home() {

    return (
        <>
            <Paper>
                <Container>
                    <Grid container>
                        <Grid item xs={12}>

                            <Typography variant="h6" align="center">
                                Hello World
                            </Typography>

                        </Grid>
                    </Grid>
                
            </Container>
            </Paper>
        </>
    )
}

export default Home;