import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type BottomSheetFooterProps = {
  max: number;
  min: number;
  humidity: number;
  windSpeed: number;
};

export const BottomSheetFooter = ({
  max,
  min,
  humidity,
  windSpeed,
}: BottomSheetFooterProps) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>
          Máx: <Text style={styles.textBold}>{max}°</Text>
        </Text>
        <Text style={styles.text}>
          Míx: <Text style={styles.textBold}>{min}°</Text>
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>
          Viento: <Text style={styles.textBold}>{windSpeed} Km-h</Text>
        </Text>
        <Text style={styles.text}>
          Humedad: <Text style={styles.textBold}>{humidity}%</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
