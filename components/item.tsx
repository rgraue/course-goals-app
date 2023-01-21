import { Pressable, View, Text } from "react-native";
import { itemStyle } from '@styles';
import { useState } from "react";
import { GoalModal } from "./modal";

export const Item = ({goal, id, goalDeleteHandler}) => {
  const [isModalVisible, switchModalVisible] = useState(false);

  function swapModalView (id) {
    console.log(isModalVisible, id);
    switchModalVisible( currentValue => !currentValue);
  }

  return (
    <View>
      <Pressable 
        onPress={swapModalView.bind(this, goal.item.name)}
        style={ ({pressed}) => pressed && itemStyle.pressedItem}
      >
        <View style={itemStyle.container}>
          <Text>{goal.item.name}</Text>
        </View>
      </Pressable>
      <GoalModal 
        goal={goal.item.name}
        isVisible={isModalVisible}
        closeModalHandler={swapModalView}
        deleteGoalHandler={goalDeleteHandler}
        id={id}
      />
    </View>
  )
}