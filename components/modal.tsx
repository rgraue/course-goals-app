import { Modal, View, Button, Text } from "react-native";

export const GoalModal = ({isVisible, goal, id, closeModalHandler, deleteGoalHandler}) => {

  return (
    <View>
      <Modal visible={isVisible}>
        <Text>{goal}</Text>
        <Button title="Close" onPress={closeModalHandler.bind(this)}/>
        <Button title="Goal Completed" onPress={deleteGoalHandler.bind(this, id)}/>
      </Modal>
    </View>
  )
}