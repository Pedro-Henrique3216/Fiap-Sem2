import { Text } from 'react-native';

export default function sum(props) {
    return (
    <View style={StyleSheet.create({
      margin: "5%"
    })}>
        <Text>{props.a + props.b}</Text>
    </View>
  );
}