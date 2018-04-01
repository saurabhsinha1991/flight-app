import { getMapping, getDateFormat } from '../common/helper';

const flightReducer = (state = {
    data: [],
    details: {}
}, action) => {

    switch (action.type) {
      case 'FLIGHT_DETAILS':
        const { payload, details } = action;

        let filteredDestinationData = [];

        const departureDay = new Date(details.departureDate).getDay();

        const filteredOriginData = payload.filter((item) => 
            item.origin === details.origin.code && 
            item.destination === details.destination.code &&
            item.availableSeats > details.passenger &&
            (item.operationalDays[0] === 7 || getDateFormat(new Date(item.departure)) === getDateFormat(new Date(details.departureDate)) || item.operationalDays.indexOf(departureDay) !== -1)
        );

        if ( details.arrivalDate && filteredOriginData.length > 0 ) {
            const arrivalDay = new Date(details.arrivalDate).getDay();
        
            filteredDestinationData = payload.filter((item) => 
                item.origin === details.destination.code && 
                item.destination === details.origin.code &&
                item.availableSeats > details.passenger &&
                (item.operationalDays[0] === 7 || getDateFormat(new Date(item.departure)) === getDateFormat(new Date(details.arrivalDate)) || item.operationalDays.indexOf(arrivalDay) !== -1)
            );
        }

        const filterData = getMapping(filteredOriginData, filteredDestinationData);

        return Object.assign({}, state, {data: filterData}, {details: action.details});

      default:
        return state
    }
}
  
export default flightReducer;