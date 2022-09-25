import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, flags, capital, population, region } = props.country
    console.log(flags);
    return (
        <div className="country bg-success">
            <h4 className="text-warning">This is: {name.common}</h4>
            <img src={flags.png} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital is: {capital} population: {population}</p>
        </div>
    )
}

export default Country
