import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { create } from 'react-test-renderer';
import { List } from './list';
import { Goal } from '../interfaces';

const mockGoal: Partial<ListRenderItemInfo<Goal>>[] = [
  {
    item: {
      name: 'test goal name',
      id: '2',
    },
  },
];

test('Goal List component', () => {
  const tree = create(<List goals={mockGoal} handleDelete={jest.fn} />);

  expect(tree).toMatchSnapshot();
});
