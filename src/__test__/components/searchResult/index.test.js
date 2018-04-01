import React from 'react';
import { shallow, configure } from 'enzyme';
import SearchResult from '../../../components/SearchResult';

import Adapter from 'enzyme-adapter-react-16';

import { requestData, requestDetails } from '../../mocks/getPostsMock';

configure({ adapter: new Adapter() });

describe('Search Results Render', () => {
    it('initial search results rendered', () => {
        const component = shallow(<SearchResult details={{}} results={[]} />);
        expect(component.find('.result-wrap').text()).toEqual('Your Search Results will be diplayed here, after submitting the form');
    });

    it('search results rendered', () => {
        const component = shallow(<SearchResult details={requestDetails} results={requestData} />);
        expect(component).toHaveLength(1);
    });

    it('search results details rendered', () => {
        const component = shallow(<SearchResult details={requestDetails} results={requestData} />);
        expect(component.find('.header')).toHaveLength(1);
    });

    it('search results card rendered', () => {
        const component = shallow(<SearchResult details={requestDetails} results={requestData} />);
        expect(component.find('Card')).toHaveLength(requestData.length);
    });
});