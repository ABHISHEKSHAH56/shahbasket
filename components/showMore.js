import React from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from './style';


export default function Showmore({onPress,heading,label}) {
  return (
    <View
      style={{
        marginVertical: 15,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontWeight: 'bold'}}>{heading}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{color: Colors.orange, fontWeight: 'bold'}}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
