import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Item } from 'react-bootstrap/lib/Breadcrumb';

const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});