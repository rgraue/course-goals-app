import { Modal, View, Button, Text } from 'react-native';
import { modalStyle } from '@styles';

export const GoalModal = ({
  isVisible,
  goal,
  id,
  closeModalHandler,
  deleteGoalHandler,
}) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType={'slide'}>
      <View style={modalStyle.container}>
        <View style={modalStyle.textContainer}>
          <Text style={modalStyle.modalText}>{goal}</Text>
        </View>
        <View style={modalStyle.buttonContainer}>
          <View style={modalStyle.buttonView}>
            <Button title="Close" onPress={closeModalHandler.bind(this, id)} />
          </View>
          <View style={modalStyle.buttonView}>
            <Button
              title="Goal Completed"
              onPress={deleteGoalHandler.bind(this, id)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
