import { View, StyleSheet } from 'react-native';
import sum from './components/Sum';

export default function App() {
  return (
    <View style={StyleSheet.create({
      margin: "5%"
    })}>
      <sum a={1} b={2} />
    </View>
  );
}

