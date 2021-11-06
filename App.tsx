import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {CardInfo} from './src/components/CardInfo';
import {BottomSheet} from './src/components/BottomSheet';
import {useWheather} from './src/hooks/useWheather';

const App = () => {
  const data = useWheather();

  if (!data) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator color="#FF8906" size={55} />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground
        source={require('./src/assets/bg.png')}
        style={styles.container}>
        <CardInfo
          temp={Math.round(data.current?.temp || 0)}
          date={new Date()}
          location="Cochabamba, Bolivia"
        />
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
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
