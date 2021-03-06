import React from 'react';

import { Cards, Chart, CountryPicker, Navbar } from '../../Components';
import styles from './index.module.css';
import { fetchData, fetchDailyData } from '../../api';

class Country extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart country={country} />
            </div>
        )
    }
}

export default Country;