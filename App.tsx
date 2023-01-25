import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState } from 'react';
import { mainStyles } from '@styles';
import { Input, List } from '@components';
import { Goal } from '@interfaces';

export default function App() {
  const [goals, setGoals] = useState([] as Goal[]);

  function addGoalHandler(goalText: string) {
    setGoals((curentGoals) => [
      {
        id: Math.floor(Math.random() * 10000000).toString(),
        name: goalText,
      },
      ...curentGoals,
    ]);
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      console.log(`DELETE item: ${id}`);
      return currentGoals.filter((goal) => {
        return goal.id !== id;
      });
    });
  }

  return (
    <View style={mainStyles.container}>
      <Input handlerEnteredText={addGoalHandler} />
      <List goals={goals} handleDelete={deleteGoalHandler} />
      <StatusBar style="inverted" />
    </View>
  );
}
