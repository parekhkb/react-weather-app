import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Forecast from './Forecast';
import Detail from './Detail';
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

class App extends Component {
    state = {
        city: ''
    }

    updateCity = text => {
        this.setState(function() { return { city: text }});
    }

    updateWeather = weather => {
        this.setState(() => ({weather}) );
    };

    renderHomeContainer = () => (
        <div className="main-container" >
            <h1 className='header'>Enter a Location</h1>
            <SearchBar direction="column" text={this.state.city} updateCity={this.updateCity}/>
        </div>
    );

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="navbar">
                        <Link to='/' className='home-link'>React to the Weather :)</Link>
                        <SearchBar direction="row" text={this.state.city} updateCity={this.updateCity}/>
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

export default App;