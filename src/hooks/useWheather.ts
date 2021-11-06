import {useState, useEffect} from 'react';
import axios from 'axios';
import {Alert} from 'react-native';

import {OneCallResp} from '../interfaces/oneCall';

export const useWheather = () => {
  const [state, setState] = useState<OneCallResp>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: receivedData} = await axios.get<OneCallResp>(
          'https://api.openweathermap.org/data/2.5/onecall?lat=-17.372265&lon=-66.170909&appid=143d27d3f9e4b91762766cf08f383acc&units=metric&lang=es',
        );
        setState(receivedData);
      } catch (error) {
        Alert.alert('Error en solicitar la información');
      }
    };

    fetchData();
  }, []);

  return {
    ...state,
  };
};
