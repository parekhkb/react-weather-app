import React from 'react';
import { getDateString, getTimeString } from '../utils/dateHelpers';
import PropTypes from 'prop-types';

function kToF(k) {
    const f = k * 9/5 - 459.67;
    return Math.round(f * 10) / 10;
}

export default function Detail(props){
    const { 
        location: { 
            state: { data },
            pathname 
        } 
    } = props;

    const { 
        dt,
        main: { 
            temp_max : maxTemp, 
            temp_min : minTemp, 
            humidity 
        }, 
        weather: [{ icon, description }] 
    } = data;
    
    const date = getDateString(dt);
    const time = getTimeString(dt);
    const city = pathname.replace('/detail/','');
    return(
        <div className="main-container detail-container">
            <h1>{city}</h1>
            <span>{date}</span>
            <span>{time}</span>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} style={{height:'150px', width:'150px'}} />
            <span>{description}</span>
            <span>{`High: ${kToF(maxTemp)} °F`}</span>
            <span>{`Low: ${kToF(minTemp)} °F`}</span>
            <span>{`Humidity: ${humidity}%`}</span>
        </div>
    );
}