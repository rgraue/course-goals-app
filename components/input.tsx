import { goalInputStyle } from "@styles";
import { TextInput, View, Button } from "react-native";
import { useState } from "react";

export const GoalInput = ({callback}) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler (enteredGoal: string) {
    setEnteredGoal(enteredGoal);
  }

  function addGoalHandler () {
    callback(enteredGoal);
    goalInputHandler('')
  }

  return (
    <View style={goalInputStyle.container}>
      <TextInput
        placeholder="Your course goal"
        placeholderTextColor={"#cccccc"}
        style={goalInputStyle.textEntry}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button 
        title="Add Goal"
        color={"black"}
        onPress={addGoalHandler}
      />
    </View>
  )
}

