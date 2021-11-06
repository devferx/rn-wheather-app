import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {CardInfo} from './src/components/CardInfo';
import {BottomSheet} from './src/components/BottomSheet';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground
        source={require('./src/assets/bg.png')}
        style={styles.container}>
        <CardInfo temp={25} date={new Date()} location="Cochabamba, Bolivia" />
        <BottomSheet>
          <Text style={{color: 'white'}}>Hello World</Text>
        </BottomSheet>
      </ImageBackground>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
