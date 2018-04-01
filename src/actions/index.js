import axios from 'axios';

export const getFlightDetails = (data) => {
    const request = axios.get('https://api.myjson.com/bins/1cb9vr');

    return (dispatch) => {
        request.then((response) => {
            dispatch({ type: 'FLIGHT_DETAILS', payload: response.data, details: data });
        });
    }
}