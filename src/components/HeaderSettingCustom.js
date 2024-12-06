import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const HeaderSettingCustom = ({warnaText, backGroundColor}) => {
  return (
    <View style={{backgroundColor: '#111b21', flexDirection: 'row', flex: 1}}>
      <Text
        style={{
          color: '#fff',
          fontSize: 30,
          fontWeight: 'condensed',
          marginLeft: 10,
        }}>
        Setting
      </Text>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          flex: 1,
          marginRight: 20,
        }}>
        <Icon name="magnifying-glass" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSettingCustom;

const styles = StyleSheet.create({});
