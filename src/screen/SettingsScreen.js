import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import HeaderSettingCustom from '../components/HeaderSettingCustom';
import Profile from '../components/Profile';
import FlatListSetting from '../components/FlatListSetting';
import Icon from 'react-native-vector-icons/FontAwesome6';

const SettingsScreen = ({navigation}) => {
  // const [lampu, setLampu] = useState(false);

  // const backGroundColor = lampu ? '#fff' : '#111b21';
  // const warnaText = lampu ? 'black' : 'white';
  return (
    <View style={{flex: 1, backgroundColor: '#111b21'}}>
      {/* HEADER */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon
            name="chevron-left"
            size={25}
            color="#fff"
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
        <HeaderSettingCustom
        // warnaText={warnaText}
        />
        {/* <Switch
          value={lampu}
          onValueChange={() => setLampu(!lampu)}
        /> */}
      </View>

      {/* PROFILE */}

      <View>
        <Profile
        // warnaText={warnaText}
        />
      </View>

      {/* FLATLIST */}
      <View>
        <FlatListSetting
        // warnaText={warnaText}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
