import React from 'react';
import { create } from 'react-test-renderer';
import { GoalInput } from './input';

function mockCallback() {
  console.log('hello world');
}

test('GoalInput Component', () => {
  const tree = create(<GoalInput callback={mockCallback} />);

  expect(tree.toJSON()).toMatchSnapshot();
});
