import { inputStyle } from '@styles';
import { TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export const Input = ({ onPressHandler }) => {
  const [enteredText, setEnteredText] = useState('');

  function textInputHandler(enteredGoal: string) {
    setEnteredText(enteredGoal);
  }

  return (
    <View style={inputStyle.container}>
      <TextInput
        placeholder="Your course goal"
        placeholderTextColor={'#cccccc'}
        style={inputStyle.textInput}
        onChangeText={textInputHandler}
        value={enteredText}
      />
      <Button
        title="Add Goal"
        color={'black'}
        onPress={onPressHandler(enteredText) && textInputHandler('')}
      />
    </View>
  );
};
