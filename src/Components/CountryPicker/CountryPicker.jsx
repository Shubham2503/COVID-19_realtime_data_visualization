import React, { useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountry } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountry,setFetchedCountry] = useState([]);

    useEffect(() =>{
        const country = async()=>{
            setFetchedCountry(await fetchCountry());
        }
        country();
    },[setFetchedCountry]);
    // console.log(fetchedCountry);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue ="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value='All'> Globle </option>
                {fetchedCountry.map((country,i) =><option key='i' value={country}> {country} </option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;