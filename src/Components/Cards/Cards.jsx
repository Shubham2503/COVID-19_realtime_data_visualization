import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classname';

import styles from './Cards.module.css';

const Cards = ({ data }) => {
    if (!data.length) {
        return "Loading...";
    }
    const currrentData = data[0];
    // console.log(data[0]);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card,styles.infected)}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={currrentData.cases.active} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(currrentData.time).toDateString()}</Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card,styles.recovered)}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={currrentData.cases.recovered} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(currrentData.time).toDateString()}</Typography>
                        <Typography varient="body2">Number of recovered from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = {cx(styles.card,styles.deaths)}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={currrentData.deaths.total} duration={2.5} separator=','/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(currrentData.time).toDateString()}</Typography>
                        <Typography varient="body2">Number of Death from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;