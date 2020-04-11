import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props.data[0]);
    return(
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center"> 
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">DATE</Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">DATE</Typography>
                        <Typography varient="body2">Number of recovered from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">DATE</Typography>
                        <Typography varient="body2">Number of Death from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div> 
    )
}

export default Cards;