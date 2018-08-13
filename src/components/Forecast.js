import React, { Component }  from 'react';
import QueryString from 'query-string';
import { fetchFiveDayForcast } from '../utils/apiClient';
import { Link } from 'react-router-dom';
import {getTimeString} from '../utils/dateHelpers';

class Forecast extends Component{
    state = {
        data: null,
        loading: true,
        error:false,
    }

    componentDidMount(){
        this.fetchData();
    }
    
    fetchData = async () => {
        const parsed = QueryString.parse(this.props.location.search);
        try {
            const data = await fetchFiveDayForcast(parsed.city);
            this.setState(() => ({
                loading: false,
                data: data
            }));
        } catch(e) {
            this.setState(()=>({
                loading:false,
                error:true
            }));
        }
    }

    render() {
        const { loading, error, data } = this.state;

        if(loading){
            return (
                <div className="main-container">
                    <h1>Loading...</h1>
                </div>
            );
        }

        if(error){
            return (
                <div className="main-container">
                    <h1>Error</h1>
                    <h2>Please double check your search</h2>
                    <h2>state abreviations are not accepted</h2>
                </div>
            );
        }

        const { city:{ name, country }, list } = data;
        const location = `${name}, ${country}`;
        return (
            <div className="main-container">
                <h1>{location}</h1>
                <h2>24 Hour Forecast</h2>
                <div className='forecast-container'>
                    {list.map(d=> <WeatherDay key={d.dt} data={d} city={location} />)}
                </div>
            </div>
        );
    }
}

function WeatherDay(props){
    const {city, data} = props;
    const [{icon, description}] = data.weather;
    const time = getTimeString(data.dt);
    return (
        <Link className='weather-day' to={{ 
            pathname:`/detail/${city}`, 
            state: { data }
        }} >
            <span>{time}</span>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} style={{height:'100px', width:'100px'}} />
            <span>{description}</span>
        </Link>
    );
}

export default Forecast;