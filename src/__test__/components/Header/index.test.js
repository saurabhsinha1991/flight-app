import React from 'react';
import { shallow, configure } from 'enzyme';
import Header from '../../../components/Header';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header Render', () => {
    it('renders Header', () => {
        const component = shallow(<Header />);
        expect(component).toHaveLength(1);
    });
});