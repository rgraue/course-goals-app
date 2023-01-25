import React from 'react';
import { create } from 'react-test-renderer';
import { Input } from './input';

function mockCallback() {
  console.log('hello world');
}

test('GoalInput Component', () => {
  const tree = create(<Input handlerEnteredText={mockCallback} />);

  expect(tree.toJSON()).toMatchSnapshot();
});
