import flightReducer from '../../reducers/flightResults';
import { requestData, requestDetails } from '../mocks/getPostsMock';

describe('Flight Reducer', () => {

    it('has a default state', () => {
        expect(flightReducer(undefined, {type: 'unexpected'})).toEqual({
            data: [],
            details: {}
        });
    });

    it('has a data rendered', () => {
        expect(flightReducer(undefined, {
            type: 'FLIGHT_DETAILS',
            payload: requestData,
            details: requestDetails
        })).toEqual({
            data: requestData,
            details: requestDetails
        });
    });
});