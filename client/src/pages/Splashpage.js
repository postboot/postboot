import React from 'react';
import MainTemplate from './MainTemplate';
import { Container, Paper, Typography, CssBaseline, Grid } from "@material-ui/core";

import { Newnav } from '../components';


function SplashPage() {



    return (
        <>

            <div className="App-header">
                <React.Fragment>
                    <CssBaseline/>
                    <Newnav />
                </React.Fragment>
            </div>

        </>
    )
};

export default SplashPage;