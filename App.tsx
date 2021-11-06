import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {CardInfo} from './src/components/CardInfo';

const App = () => {
  return (
    <ImageBackground
      source={require('./src/assets/bg.png')}
      style={styles.container}>
      <CardInfo temp={25} date={new Date()} location="Cochabamba, Bolivia" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
