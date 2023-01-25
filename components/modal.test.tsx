import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { create } from 'react-test-renderer';
import { GoalModal} from './modal'
import { Goal } from '../interfaces';

function mockCloseHandler () {
  console.log('CLOSE MODAL');
}

function mockDeleteHandler () {
  console.log('DELETE');
}

const mockGoal: Partial<ListRenderItemInfo<Goal>>= 
  {
    item: {
      name: 'test goal name',
      id: '2',
    }
  }

test('Modal Component', () => {
  const tree = create(
    <GoalModal
      isVisible={true}
      goal={mockGoal.item?.name}
      id={mockGoal.item?.id}
      closeModalHandler={mockCloseHandler}
      deleteGoalHandler={mockDeleteHandler}
    />
  );

  expect(tree).toMatchSnapshot();
})