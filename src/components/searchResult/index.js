import React from 'react';
import Card from './card';
import './index.scss';

const SearchResult = ({details, results}) => (
    <div className='search-wrapper'>
        { Object.keys(details).length > 0 ?
            <div className='search'>
                <div className='header'>
                    <h2>{ details.origin.name } > { details.destination.name }</h2>
                    <div className='dates'>
                        <p>Depart: { details.departureDate }</p>
                        { details.arrivalDate &&
                            <p>Return: { details.arrivalDate }</p>
                        }
                    </div>
                </div>
                <div className='result-section'>
                    { results.map((item, key) => <Card key={key} cardDetails={item} /> )}
                </div>
            </div>
            :
            <div className='result-wrap'>
                Your Search Results will be diplayed here, after submitting the form
            </div>
        }
    </div>
);

export default SearchResult;