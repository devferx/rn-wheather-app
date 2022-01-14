import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Current} from '../interfaces/oneCall';

type HourlyItemProps = {
  data: Current;
};

export const HourlyItem = ({data}: HourlyItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        }}
        style={styles.img}
      />
      <Text style={{color: 'white'}}>{data.temp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#393939',
    marginRight: 16,
    borderRadius: 999,
  },
  img: {
    width: 50,
    height: 50,
  },
});
