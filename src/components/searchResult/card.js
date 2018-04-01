import React from 'react';

const formatDate = (date) => {
    let date_obj = new Date(date),
        hour = date_obj.getHours(),
        minute = date_obj.getMinutes(),
        amPM = (hour > 11) ? "pm" : "am";
        
    if(hour > 12) {
        hour -= 12;
    } else if(hour === 0) {
        hour = "12";
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    return hour + ":" + minute + amPM;
}

const Card = ({cardDetails}) => (
    <div className='flight'>
        <div className='flight-details'>
            <h3 className='price'>Rs {cardDetails.price + (cardDetails.returningDetails ? cardDetails.returningDetails.price : 0 )}</h3>
            <div className='details'>
                <div className='depart-details'>
                    <p>{cardDetails.airlineCode}</p>
                    <p className='direction'>{cardDetails.origin} > {cardDetails.destination}</p>
                    <p>Depart: {formatDate(cardDetails.departure)}</p>
                    <p>Arrival: {formatDate(cardDetails.arrival)}</p>
                </div>
                { cardDetails.returningDetails &&
                    <div className='depart-details'>
                        <p>{cardDetails.returningDetails.airlineCode}</p>
                        <p className='direction'>{cardDetails.returningDetails.origin} > {cardDetails.returningDetails.destination}</p>
                        <p>Depart: {formatDate(cardDetails.returningDetails.departure)}</p>
                        <p>Arrival: {formatDate(cardDetails.returningDetails.arrival)}</p>
                    </div>
                }
            </div>
            <button className='book' type='button'>BOOK THIS FLIGHT</button>
        </div>
    </div>
);

export default Card;