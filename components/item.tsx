import { Pressable, View, Text } from 'react-native';
import { itemStyle } from '@styles';
import { useState } from 'react';
import { GoalModal } from './modal';

export const Item = ({ goal, id, deleteHandler }) => {
  const [isModalVisible, switchModalVisible] = useState(false);

  function swapModalView() {
    switchModalVisible((currentValue) => !currentValue);
  }

  return (
    <View>
      <Pressable
        onPress={swapModalView.bind(this)}
        style={({ pressed }) => pressed && itemStyle.pressedItem}
      >
        <View style={itemStyle.container}>
          <Text>{goal.item.name}</Text>
        </View>
      </Pressable>
      <GoalModal
        goal={goal.item.name}
        isVisible={isModalVisible}
        closeModalHandler={swapModalView}
        deleteGoalHandler={deleteHandler}
        id={id}
      />
    </View>
  );
};
