import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import List from './screens/list/List';
import { COLORS, SPACING, TYPOGRAPHY } from './constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND_DARK,
    flexGrow: 1,
  },
  title: {
    ...TYPOGRAPHY.TITLE,
    color: COLORS.TITLE,
    textAlign: 'center',
    width: '100%',
    marginTop: SPACING.MARGIN_20,
    marginBottom: SPACING.MARGIN_20,
  }
});

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Simple Todo App</Text>
      <List />
    </SafeAreaView>
  );
};


export default App;
