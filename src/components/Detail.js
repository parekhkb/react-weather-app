var React = require('react');
var getMoment = require('../utils/dateHelpers').getMoment;

class Detail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var data = this.props.location.state.data;
        var date = getMoment(data.dt).format("dddd, MMMM Do YYYY");
        var time = getMoment(data.dt).format("h:mm:ss A");
        var city = this.props.location.pathname.replace('/detail/','');
        var maxTemp = data.main.temp_max * 9/5 - 459.67
        var minTemp = data.main.temp_min * 9/5 - 459.67
        maxTemp = Math.round(maxTemp *10) / 10;
        minTemp = Math.round(minTemp *10) / 10;

        console.log(this.props);
        return(
            <div className="main-container detail-container">
                <h1>{city}</h1>
                <span>{date}</span>
                <span>{time}</span>
                <img src={'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'} style={{height:'150px', width:'150px'}} />
                <span>{data.weather[0].description}</span>
                <span>{'High: ' + maxTemp + ' °F'}</span>
                <span>{'Low: ' + minTemp + ' °F'}</span>
                <span>{'Humidity: ' + data.main.humidity + '%'}</span>
            </div>
        );
    }
}

module.exports = Detail;
