var React = require('react');
var PropTypes = require('prop-types');
var RouterDOM = require('react-router-dom');
var Link = RouterDOM.Link;
var withRouter = RouterDOM.withRouter;

class SearchBar extends React.Component {
    constructor (props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange (event) {
        var text = event.target.value;
        this.props.updateCity(text);
    }

    onSubmit(event){
        event.preventDefault();
        if(!this.props.text) {
            return;
        }

        this.props.history.push('/forecast?city=' + this.props.text);
    }

    render() {
        return (
            <form className="searchbar-container" style={{flexDirection: this.props.direction}} onSubmit={this.onSubmit}>
                <input 
                    placeholder="City, State" 
                    className='form-control'
                    type='text'
                    value={this.props.text}
                    onChange={this.handleChange}/>
                <button type='submit' className='btn btn-success'>Get Weather</button>
            </form>
        );
    }
}

SearchBar.propTypes = {
    direction: PropTypes.string.isRequired,
    updateCity: PropTypes.func.isRequired,
    text: PropTypes.string
};

module.exports = withRouter(SearchBar);