var React = require('react');
var apiClient = require('../utils/apiClient');
var QueryString = require('query-string');
var moment = require('moment');
var Link = require('react-router-dom').Link;

class Forecast extends React.Component{
    constructor(props){
        super(props);       
        
        this.state = {
            data: null,
            loading: true,
            error:false,
        };

        this.fetchData = this.fetchData.bind(this);
        this.fetchData();
    }

    componentDidMount(){
        this.fetchData();
    }
    
    fetchData() {
        var parsed = QueryString.parse(this.props.location.search);
        apiClient.fetchFiveDayForcast(parsed.city)
                .then(data => this.setState(() => { 
                    return {
                        loading: false,
                        data: data
                    };
                }))
                .catch(()=>this.setState(()=>{return {loading:false, error:true}}));               
    }

    render() {
        if(this.state.loading){
            return (
                <div className="main-container">
                    <h1>Loading...</h1>
                </div>
            );
        }

        if(this.state.error){
            return (
                <div className="main-container">
                    <h1>Error occured, please double check your city.</h1>
                </div>
            );
        }

        var cityInfo = this.state.data.city;
        var forcastList = this.state.data.list;
        var location = cityInfo.name + ', ' + cityInfo.country;
        return (
            <div className="main-container">
                <h1>{location}</h1>
                <h2>24 Hour Forecast</h2>
                <div className='forecast-container'>
                    {forcastList.map(d=> <WeatherDay key={d.dt} data={d} />)}
                </div>
            </div>
        );
    }
}

function WeatherDay(props){
    var weather = props.data.weather[0];
    var time = moment(new Date(props.data.dt * 1000)).format("h:mm A");
    return (
        <Link className='weather-day' to='/detail' >
            <span>{time}</span>
            <img src={'http://openweathermap.org/img/w/' + weather.icon + '.png'} style={{height:'100px', width:'100px'}} />
            <span>{weather.description}</span>
        </Link>
    );
}

module.exports = Forecast;