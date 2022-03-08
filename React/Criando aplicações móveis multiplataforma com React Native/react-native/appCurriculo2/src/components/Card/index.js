import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

const Card = ({title, children}) => {
  return (
    <View style={style.card}>
      <View>
        <Text style={style.card_header_text}>{title}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default Card;
