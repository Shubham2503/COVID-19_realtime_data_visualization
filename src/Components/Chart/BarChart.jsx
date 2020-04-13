import React, { useState, useEffect} from 'react';
import { fetchStats } from '../../api';
import {Line,Bar} from 'react-chartjs-2';

import styles from './BarChart.module.css';

const Chart = () => {
    const [dailyData,setDailyData] = useState({});

    // same as
    // state = {
    //     dailyData: {}; 
    // } and this.setState....

    useEffect(() =>{
        const fetchAPI = async () =>{
            setDailyData(await fetchStats());
        }
        console.log(dailyData);
        fetchAPI();
    },[]);

    // console.log(dailyData);

    const BarChart = (
        dailyData.length ?
        (
        <Bar 
            data = {{
                labels: dailyData.map(({country}) => country),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Worldwide Cases',
                    backgroundColor: [
                        'rgba(86, 80, 146, 0.2)',
                        'rgba(58, 218, 84, 0.2)',
                        'rgba(162, 218, 22, 0.2)',
                        'rgba(143, 88, 249, 0.2)',
                        'rgba(133, 138, 213, 0.2)',
                        'rgba(188, 108, 65, 0.2)',
                        'rgba(166, 76, 147, 0.2)',
                        'rgba(171, 41, 123, 0.2)',
                        'rgba(12, 71, 6, 0.2)',
                        'rgba(27, 42, 122, 0.2)',
                        'rgba(155, 162, 169, 0.2)',
                        'rgba(252, 87, 91, 0.2)',
                        'rgba(45, 28, 104, 0.2)',
                        'rgba(35, 147, 18, 0.2)',
                        'rgba(86, 125, 209, 0.2)',
                        'rgba(201, 201, 250, 0.2)',
                        'rgba(72, 44, 44, 0.2)',
                        'rgba(62, 195, 232, 0.2)',
                        'rgba(89, 160, 39, 0.2)',
                        'rgba(217, 19, 55, 0.2)',
                        'rgba(86, 80, 146, 0.2)',
                        'rgba(58, 218, 84, 0.2)',
                        'rgba(162, 218, 22, 0.2)',
                        'rgba(143, 88, 249, 0.2)',
                        'rgba(133, 138, 213, 0.2)',
                        'rgba(188, 108, 65, 0.2)',
                        'rgba(166, 76, 147, 0.2)',
                        'rgba(171, 41, 123, 0.2)',
                        'rgba(12, 71, 6, 0.2)',
                        'rgba(27, 42, 122, 0.2)',
                        'rgba(155, 162, 169, 0.2)',
                        'rgba(252, 87, 91, 0.2)',
                        'rgba(45, 28, 104, 0.2)',
                        'rgba(35, 147, 18, 0.2)',
                        'rgba(86, 125, 209, 0.2)',
                        'rgba(201, 201, 250, 0.2)',
                        'rgba(72, 44, 44, 0.2)',
                        'rgba(62, 195, 232, 0.2)',
                        'rgba(89, 160, 39, 0.2)',
                        'rgba(217, 19, 55, 0.2)'
                    ],
                    borderColor: [
                        'rgba(86, 80, 146, 1)',
                        'rgba(58, 218, 84, 1)',
                        'rgba(162, 218, 22, 1)',
                        'rgba(143, 88, 249, 1)',
                        'rgba(133, 138, 213, 1)',
                        'rgba(188, 108, 65, 1)',
                        'rgba(166, 76, 147, 1)',
                        'rgba(171, 41, 123, 1)',
                        'rgba(12, 71, 6, 1)',
                        'rgba(27, 42, 122, 1)',
                        'rgba(155, 162, 169, 1)',
                        'rgba(252, 87, 91, 1)',
                        'rgba(45, 28, 104, 1)',
                        'rgba(35, 147, 18, 1)',
                        'rgba(86, 125, 209, 1)',
                        'rgba(201, 201, 250, 1)',
                        'rgba(72, 44, 44, 1)',
                        'rgba(62, 195, 232, 1)',
                        'rgba(89, 160, 39, 1)',
                        'rgba(217, 19, 55, 1)',
                        'rgba(86, 80, 146, 1)',
                        'rgba(58, 218, 84, 1)',
                        'rgba(162, 218, 22, 1)',
                        'rgba(143, 88, 249, 1)',
                        'rgba(133, 138, 213, 1)',
                        'rgba(188, 108, 65, 1)',
                        'rgba(166, 76, 147, 1)',
                        'rgba(171, 41, 123, 1)',
                        'rgba(12, 71, 6, 1)',
                        'rgba(27, 42, 122, 1)',
                        'rgba(155, 162, 169, 1)',
                        'rgba(252, 87, 91, 1)',
                        'rgba(45, 28, 104, 1)',
                        'rgba(35, 147, 18, 1)',
                        'rgba(86, 125, 209, 1)',
                        'rgba(201, 201, 250, 1)',
                        'rgba(72, 44, 44, 1)',
                        'rgba(62, 195, 232, 1)',
                        'rgba(89, 160, 39, 1)',
                        'rgba(217, 19, 55, 1)'
                    ],
                    borderWidth: 1
                }],
                
            }}
            option = {{
                responsive: true,
            }}
        />) : null
    );

    return(
        <div className={styles.container}>
            {BarChart}
        </div> 
    )
}

export default Chart;