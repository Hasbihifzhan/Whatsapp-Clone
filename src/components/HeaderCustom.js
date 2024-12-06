import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderCustom = ({headerColor = '#111b21'}) => {
  return (
    <View style={{backgroundColor: headerColor, flex: 1}}>
      <Text
        style={{
          color: '#ffffff',
          fontSize: 30,
          fontWeight: 'bold',
          marginLeft: 10,
        }}>
        Chat
      </Text>
    </View>
  );
};
export default HeaderCustom;

const styles = StyleSheet.create({});
