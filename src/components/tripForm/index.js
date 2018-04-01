import React from 'react';
import AutoSuggest from './autoSuggest';
import './index.scss';

class TripForm extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            activeTab: 'O',
            originSuggestion: [{
                name: 'New Delhi, India',
                code: 'DEL'
            }, {
                name: 'Mumbai, India',
                code: 'BOM'
            }, {
                name: 'Pune, India',
                code: 'PNQ'
            }],
            destinationSuggestion: []
        }

        this.changeTab = this.changeTab.bind(this);
        this.setStartDate = this.setStartDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setOriginSelectedValue = this.setOriginSelectedValue.bind(this);
        this.setDestionSelectedValue = this.setDestionSelectedValue.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        const { origin, destination } = this.state;

        this.props.formData({
            origin,
            destination,
            departureDate: event.target.departureDate.value,
            arrivalDate: (event.target.arrivalDate) ? event.target.arrivalDate.value : null,
            passenger: event.target.passenger.value
        });        
    }

    changeTab(activeTab) {
        this.setState({
            activeTab
        }, () => {
            this.form.reset();
            this.departureDate.type = 'text';
            if( this.arrivalDate ) this.arrivalDate.type = 'text';
        });
    }

    setOriginSelectedValue(val) {

        const destinationSuggestion = this.state.originSuggestion.filter((item) => item.code !== val.code );

        this.setState({
            origin: val,
            destinationSuggestion
        });
    }

    setDestionSelectedValue(val) {
        this.setState({
            destination: val
        });
    }

    setStartDate(e) {
        this.setState({
            startDate: e.target.value
        });
    }

    render() {
        const { activeTab } = this.state;
        const date = new Date();

        return (
            <div className='form-wrapper'>
                <div className='tabs'>
                    <ul>
                        <li onClick={() => this.changeTab('O')} className={(activeTab === 'O') ? 'active' : ''}>One Way</li>
                        <li onClick={() => this.changeTab('R')} className={(activeTab === 'R') ? 'active' : ''}>Return</li>
                    </ul>
                    <form onSubmit={this.onSubmit} ref={(form) => { this.form = form; }}>
                        <div className='field'>
                            <AutoSuggest
                                name="origin"
                                placeholder="Enter Origin"
                                suggestion={this.state.originSuggestion}
                                setSelectedValue={this.setOriginSelectedValue} />
                        </div>
                        <div className='field'>
                            <AutoSuggest
                                name="destination"
                                placeholder="Enter destination"
                                suggestion={this.state.destinationSuggestion}
                                setSelectedValue={this.setDestionSelectedValue} />
                        </div>
                        <div className='field'>
                            <input 
                                type="text"
                                name="departureDate"
                                required
                                ref={(input) => { this.departureDate = input; }} 
                                min={`${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getDate()}`}
                                onFocus={() => {this.departureDate.type = 'date'}}
                                onChange={(e) => this.setStartDate(e)}
                                placeholder="Departure Date" />
                        </div>
                        { activeTab === 'R' &&
                            <div className='field'>
                                <input 
                                    type="text"
                                    name="arrivalDate"
                                    required
                                    ref={(input) => { this.arrivalDate = input; }} 
                                    min={this.state.startDate}
                                    onFocus={() => {this.arrivalDate.type = 'date'}}
                                    placeholder="Arrival Date" />
                            </div>
                        }
                        <div className='field'>
                            <input type="number" min="1" required name="passenger" placeholder="Passengers" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default TripForm;