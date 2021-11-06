import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getDayString} from '../utils/getDayString';
import {getMonthString} from '../utils/getMonthString';

type CardInfoProps = {
  temp: number;
  date: Date;
  location: string;
};

export const CardInfo = ({temp, date, location}: CardInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardInfo}>
        <Text style={styles.tempText}>{temp}°</Text>
        <View style={styles.cardInfoContent}>
          <Text style={styles.infoContentText}>
            {getDayString(date.getDay())}, {date.getDate()} de{' '}
            {getMonthString(date.getMonth())}
          </Text>
          <Text style={[styles.infoContentText, styles.lastInfoContentText]}>
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#292E49',
  },
  tempText: {
    fontSize: 56,
    color: 'white',
  },
  cardInfoContent: {
    marginLeft: 16,
  },
  infoContentText: {
    color: 'white',
    textAlign: 'center',
  },
  lastInfoContentText: {
    marginTop: 12,
  },
});
