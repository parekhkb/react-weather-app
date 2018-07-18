var React = require('react');
var ZipCode = require('./ZipCode');
var apiClient = require('../utils/apiClient');

class App extends React.Component {
    constructor(props){
        super(props);

        this.state={
            city: ''
        }

        this.updateCity = this.updateCity.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.updateWeather = this.updateWeather.bind(this);
    }

    updateCity (text) {
        this.setState(function() { return { city: text }});
    }

    updateWeather (weather) {
        this.setState(() => { return {weather} });
    };

    getWeather () {
        apiClient.fetchCurrentWeather(this.state.city, this.updateWeather);
    }

    render()
    {
        console.log(this.state.weather);
        return (
            <div className="container">
                <div className="navbar">
                    <h1>React Weather :)</h1>
                    <ZipCode direction="row" text={this.state.city} updateCity={this.updateCity} onSubmit={this.getWeather}/>
                </div>
                <div className="home-container" style={{backgroundImage: "url('src/pattern.svg')"}}>
                    <h1 className='header'>Enter a City and State</h1>
                    <ZipCode direction="column" text={this.state.city} updateCity={this.updateCity} onSubmit={this.getWeather} />
                </div>
            </div>
        );
    }
}

module.exports = App;