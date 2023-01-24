import { View, FlatList } from 'react-native';
import { listStyle } from '@styles';
import { Item } from './item';
import { Goal } from '@interfaces';

export const GoalList = ({ goals, handleDelete }) => {
  return (
    <View style={listStyle.container}>
      <FlatList
        data={goals as Goal[]}
        renderItem={(goal) => {
          return (
            <View>
              <Item
                goal={goal}
                id={goal.item.id}
                goalDeleteHandler={handleDelete}
              />
            </View>
          );
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
};
