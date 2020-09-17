import React from "react";
import { Container, Paper, Typography, CssBaseline, Grid } from "@material-ui/core";

import { Newnav } from '../components';
import Projects from "../components/Projects";

function MainTemplate() {

    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Newnav />
            </React.Fragment>
        </>
    )
}

export default MainTemplate;