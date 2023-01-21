import { View, FlatList } from 'react-native';
import { listStyle } from '@styles';
import { Item } from '@components';
import { Goal } from '@interfaces';

export const GoalList = ({goals, handleDelete}) => {

  return (
    <View style={listStyle.container}>
      <FlatList 
        data={goals as Goal[]}
        renderItem={ (goal) => {
          return (
            <Item goal={goal} handlePress={handleDelete} id={goal.item.id}/>
          )
        }}
        keyExtractor={(item) => {
          return item.id
        }}
      />
    </View>
  )
}