import React from 'react';
import { findByTestAttr } from '../../testUtils';
import App from './';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  return shallow(<App />);
};

test('App renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
