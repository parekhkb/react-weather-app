var React = require('react');
var ZipCode = require('./ZipCode');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Forecast = require('./Forecast');
var Detail = require('./Detail');
var Link = ReactRouter.Link;

class App extends React.Component {
    constructor(props){
        super(props);

        this.state={
            city: ''
        }

        this.updateCity = this.updateCity.bind(this);
        this.updateWeather = this.updateWeather.bind(this);
        this.renderHomeContainer = this.renderHomeContainer.bind(this);
    }

    updateCity (text) {
        this.setState(function() { return { city: text }});
    }

    updateWeather (weather) {
        this.setState(() => { return {weather} });
    };

    renderHomeContainer() {
        return(
            <div className="main-container" >
                <h1 className='header'>Enter a City and State</h1>
                <ZipCode direction="column" text={this.state.city} updateCity={this.updateCity}/>
            </div>
        );
    }

    render()
    {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="navbar">
                        <Link to='/' className='home-link'>React to the Weather :)</Link>
                        <ZipCode direction="row" text={this.state.city} updateCity={this.updateCity}/>
                    </div>
                    <Switch>
                        <Route exact path='/' render={()=> this.renderHomeContainer() } />
                        <Route path='/forecast' render={props => <Forecast key={props.location.search} location={props.location} />} />
                        <Route path='/detail' component={Detail} />
                        <Route render={()=> <p>Not Found</p>} />
                    </Switch>               
                </div>
            </BrowserRouter>
        );
    }
}

module.exports = App;