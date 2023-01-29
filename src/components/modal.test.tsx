import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { GoalModal } from './modal';
import { Goal } from '../interfaces';

const mockCloseFn = jest.fn();
const mockDeleteFn = jest.fn();

const mockGoal: Partial<ListRenderItemInfo<Goal>> = {
  item: {
    name: 'test goal name',
    id: '2',
  },
};

test('Modal Component', async () => {
  const tree = render(
    <GoalModal
      isVisible={true}
      goal={mockGoal.item?.name}
      id={mockGoal.item?.id}
      closeModalHandler={mockCloseFn}
      deleteGoalHandler={mockDeleteFn}
    />,
  );

  const closeButton = await screen.findByLabelText('Close Btn');
  const deleteButton = await screen.findByLabelText('Delete Btn');

  fireEvent.press(closeButton);
  fireEvent.press(deleteButton);

  expect(mockCloseFn).toBeCalledTimes(1);
  expect(mockDeleteFn).toBeCalledTimes(1);
  expect(mockDeleteFn).toBeCalledWith('2');
  expect(tree).toMatchSnapshot();
});
