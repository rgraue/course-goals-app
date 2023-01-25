import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { create } from 'react-test-renderer';
import { Item } from './item'
import { Goal } from '../interfaces';

function mockDeleteHandler() {
  console.log('DELETE');
}

const mockGoal: Partial<ListRenderItemInfo<Goal>>= 
  {
    item: {
      name: 'test goal name',
      id: '2',
    }
  }


test('GoalItem Component', () => {
  const tree = create(
    <Item
      id={mockGoal.item?.id}
      goal={mockGoal}
      goalDeleteHandler={mockDeleteHandler}
    />
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
