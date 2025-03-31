
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StrategyRoutes from './src/routes/StrategyRoutes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <StrategyRoutes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
