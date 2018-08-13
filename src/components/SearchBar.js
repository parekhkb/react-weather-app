import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    static propTypes = {
        direction: PropTypes.string.isRequired,
        updateCity: PropTypes.func.isRequired,
        text: PropTypes.string
    }

    handleChange = (event) => {
        const text = event.target.value;
        this.props.updateCity(text);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { text } = this.props;
        if(!text) {
            return;
        }

        this.props.history.push(`/forecast?city=${text}`);
    }

    render() {
        const { direction, text } = this.props;

        return (
            <form className="searchbar-container" style={{flexDirection: direction}} onSubmit={this.onSubmit}>
                <input 
                    placeholder="City, State" 
                    className='form-control'
                    type='text'
                    value={text}
                    onChange={this.handleChange}/>
                <button type='submit' className='btn btn-success'>Get Weather</button>
            </form>
        );
    }
}

export default withRouter(SearchBar);