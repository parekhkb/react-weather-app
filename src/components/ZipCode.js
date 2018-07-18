var React = require('react');
var PropTypes = require('prop-types');

class ZipCode extends React.Component {
    constructor (props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        var text = event.target.value;
        this.props.updateCity(text);
    }

    render() {
        return (
            <div className="zipcode-container" style={{flexDirection: this.props.direction}}>
                <input 
                    placeholder="Seattle, Washington" 
                    className='form-control'
                    type='text'
                    value={this.props.text}
                    onChange={this.handleChange}/>
                <button
                    type='button'
                    style={{margin: 10}}
                    className='btn btn-success'
                    onClick={this.props.onSubmit}>Get Weather</button>
            </div>
        );
    }
}

ZipCode.propTypes = {
    direction: PropTypes.string.isRequired,
    updateCity: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    text: PropTypes.string
};

module.exports = ZipCode;