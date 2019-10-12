import React from 'react';
import { findByTestAttr, checkProps } from '../../testUtils';
import Input from './';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
};

test('Input renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' });
});

describe('state controlled input field', () => {
  test('state updates with value of input box upon change', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
});
