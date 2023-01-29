import React from 'react';
import { fireEvent, act, render, screen } from '@testing-library/react-native';
import { Input } from './input';

const mockFunc = jest.fn();

test('GoalInput Component', async () => {
  const tree = render(<Input handlerEnteredText={mockFunc} />);

  const textInput = await screen.findByPlaceholderText('Enter Goal');
  const button = await screen.findByLabelText('Text Btn');

  fireEvent.changeText(textInput, 'test');
  fireEvent.press(button);

  expect(mockFunc).toBeCalledWith('test');
  expect(tree.toJSON()).toMatchSnapshot();
});
