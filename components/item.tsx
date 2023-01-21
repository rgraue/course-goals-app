import { Pressable, View, Text } from "react-native";
import { itemStyle } from '@styles';
import { useState } from "react";
import { GoalModal } from "./modal";

export const Item = ({goal, id, goalDeleteHandler}) => {
  const [isModalVisible, switchModalVisible] = useState(false);

  function swapModalView () {
    console.log(isModalVisible);
    switchModalVisible( currentValue => !currentValue);
  }

  return (
    <View>
      <Pressable 
        onPress={swapModalView}
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