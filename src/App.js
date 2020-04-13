import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Cards, Chart, CountryPicker, Navbar } from './Components';
import styles from './App.module.css';
import { fetchData, fetchDailyData } from './api';

import Country from './Pages/Country/index';
import World from './Pages/World/index';

class App extends React.Component {
    // state = {
    //     data: {},
    //     country: '',
    // }

    // async componentDidMount() {
    //     const fetchedData = await fetchData();
    //     this.setState({ data: fetchedData });
    // }

    // handleCountryChange = async (country) => {
    //     const fetchedData = await fetchData(country);
    //     this.setState({ data: fetchedData, country: country });
    // }

    render() {
        // const { data, country } = this.state;

        return (
            <div className={styles.container}>
            <Router>
            <Navbar />
            <Switch>
                <Route path="/world">
                    <World />
                </Route>
                <Route path="/">
                    <Country />
                </Route>
                </Switch>
            </Router>
            </div>
        )
    }
}

export default App;