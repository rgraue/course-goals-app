import React from 'react';
import { create } from 'react-test-renderer';
import { GoalInput } from './input';

function mockCallback() {
  console.log('hello world');
}

describe('test test lol', () => {
  test('a sample test', () => {
    expect(true).toBe(true);
  });

  test('GoalInput Component', () => {
    const tree = create(<GoalInput callback={mockCallback} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
