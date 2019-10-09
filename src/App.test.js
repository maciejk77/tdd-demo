import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const app = wrapper.find("[data-test='app']");
  expect(app.length).toBe(1);
});

it('renders increment button', () => {});

it('renders counter display', () => {});

it('counter starts at 0', () => {});

it('clicking button increments the counter display', () => {});
