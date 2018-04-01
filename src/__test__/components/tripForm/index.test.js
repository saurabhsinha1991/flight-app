import React from 'react';
import { shallow, configure } from 'enzyme';
import TripForm from '../../../components/tripForm';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Form Render', () => {
    it('Form renders', () => {
        const component = shallow(<TripForm />);
        expect(component).toHaveLength(1);
    });

    it('has two auto suggest box', () => {
        const component = shallow(<TripForm />);
        expect(component.find('AutoSuggest')).toHaveLength(2);
    });

    it('has a submit button', () => {
        const component = shallow(<TripForm />);
        expect(component.find('[type="submit"]')).toHaveLength(1);
    });

});