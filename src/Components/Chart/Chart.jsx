import React, { useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import {Line,Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({country}) => {
    const [dailyData,setDailyData] = useState({});

    // same as
    // state = {
    //     dailyData: {}; 
    // } and this.setState....

    useEffect(() =>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData(country));
        }
        console.log(dailyData);
        fetchAPI();
    },[country]);

    // console.log(dailyData);

    const lineChart = (
        dailyData.length ?
        (
        <Line 
            data = {{
                labels: dailyData.map(({time}) => time),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    fill: true,
                    borderColor: '#3333ff'
                },{
                    data: dailyData.map(({recovered}) => recovered),
                    label: 'Recovered',
                    fill: true,
                    borderColor: 'rgb(0,255,0)'
                },{
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'deaths',
                    fill: true,
                    borderColor: 'rgb(255,0,0)'
                }],
                
            }}
            option = {{
                responsive: true,
            }}
        />) : null
    );

    return(
        <div class="wrapper">
            <div className={styles.chart}>
                {lineChart}
            </div>
        </div> 
    )
}

export default Chart;