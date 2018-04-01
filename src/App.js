import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './styles/App.scss';

import Header from './components/Header';
import TripForm from './components/tripForm';
import SearchResult from './components/searchResult';
import { getFlightDetails } from './actions/index';

class App extends Component {

    constructor(props) {
        super(props);

        this.formData = this.formData.bind(this);

    }

    formData(data) {
        this.props.actions.getFlightDetails(data);
    }

    render() {
        return (
            <div className="App">
                <Header hamburgerToggle={this.hamburgerToggle} />
                <div className='layout'>
                    <div className='container'>
                        <div className='form-section'>
                            <TripForm formData={this.formData} />
                        </div>
                        <div className='search-section'>
                            <SearchResult details={this.props.flightDetails.details} results={this.props.flightDetails.data} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      flightDetails: state.flightDetails
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: {
          getFlightDetails: bindActionCreators(getFlightDetails, dispatch)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
