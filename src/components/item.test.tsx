import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { render } from '@testing-library/react-native';
import { Item } from './item';
import { Goal } from '../interfaces';

const mockFunc = jest.fn();

const mockGoal: Partial<ListRenderItemInfo<Goal>> = {
  item: {
    name: 'test goal name',
    id: '2',
  },
};

test('GoalItem Component', async () => {
  const tree = render(
    <Item id={mockGoal.item?.id} goal={mockGoal} deleteHandler={mockFunc} />,
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
