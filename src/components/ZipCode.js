var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

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
                    placeholder="City, State" 
                    className='form-control'
                    type='text'
                    value={this.props.text}
                    onChange={this.handleChange}/>
                    <Link 
                        className='btn btn-success' 
                        onClick={e => {
                            if(!this.props.text){
                                 e.preventDefault()
                                }
                            }
                        }

                        style={{margin: 10, textDecoration: 'none'}}
                        to={{
                            pathname: '/forecast',
                            search: '?city=' + this.props.text
                        }}
                        >Get Weather</Link>
            </div>
        );
    }
}

ZipCode.propTypes = {
    direction: PropTypes.string.isRequired,
    updateCity: PropTypes.func.isRequired,
    text: PropTypes.string
};

module.exports = ZipCode;