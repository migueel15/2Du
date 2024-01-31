import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Main from './src/components/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
        <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#192026',
  }
})
