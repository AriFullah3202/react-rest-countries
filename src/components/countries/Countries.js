import React, { useEffect, useState } from 'react'
import Country from '../country/Country';
import './Countries.css';

export const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <h1>hello from countries</h1>
            <div className="countries-container">
                {
                    countries.map((country, index) => <Country
                        key={index}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    )
}
