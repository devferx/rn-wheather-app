import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {CardInfo} from './src/components/CardInfo';
import {BottomSheet} from './src/components/BottomSheet';
import {useWheather} from './src/hooks/useWheather';
import {BottomSheetFooter} from './src/components/BottomSheetFooter';
import {HourlyItem} from './src/components/HourlyItem';

const App = () => {
  const data = useWheather();

  if (!data || !data.daily || !data.current) {
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
          <BottomSheetFlatList
            data={data.hourly}
            horizontal
            keyExtractor={item => item.dt.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <HourlyItem data={item} />}
          />

          <BottomSheetFooter
            max={data.daily[0].temp.max}
            min={data.daily[0].temp.min}
            humidity={data.current.humidity}
            windSpeed={data.current.wind_speed}
          />
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
