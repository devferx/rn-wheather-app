import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardInfo} from './src/components/CardInfo';

const App = () => {
  return (
    <View style={styles.container}>
      <CardInfo temp={25} date={new Date()} location="Cochabamba, Bolivia" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
