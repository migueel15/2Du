import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.root}>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#192026',
  }
})
