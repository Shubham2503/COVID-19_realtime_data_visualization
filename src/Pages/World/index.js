import React from 'react';

import { BarChart } from '../../Components';
import styles from './index.module.css';
import { fetchStats } from '../../api';


class Country extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchStats();
        this.setState({ data: fetchedData });
    }

    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <BarChart />
            </div>
        )
    }
}

export default Country;