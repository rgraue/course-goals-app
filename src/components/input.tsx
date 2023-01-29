import { inputStyle } from '@styles';
import { TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export const Input = ({ handlerEnteredText }) => {
  const [enteredText, setEnteredText] = useState('');

  function textInputHandler(enteredGoal: string) {
    setEnteredText(enteredGoal);
  }

  const onPressHandler = () => {
    handlerEnteredText(enteredText);
  };

  return (
    <View style={inputStyle.container}>
      <TextInput
        placeholder="Enter Goal"
        placeholderTextColor={'#cccccc'}
        style={inputStyle.textInput}
        onChangeText={textInputHandler}
        value={enteredText}
      />
      <Button
        title="Add Goal"
        color={'#A396B0'}
        accessibilityLabel="Text Btn"
        onPress={onPressHandler}
      />
    </View>
  );
};
