import { Pressable, View, Text } from "react-native";
import { itemStyle } from '@styles';

export const Item = ({goal, handlePress, id}) => {

  return (
    <Pressable 
      onPress={handlePress.bind(this, id)}
      style={ ({pressed}) => pressed && itemStyle.pressedItem}
    >
      <View style={itemStyle.container}>
        <Text>{goal.item.name}</Text>
      </View>
    </Pressable>

  )
}