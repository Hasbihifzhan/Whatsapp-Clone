import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Profile = ({warnaText}) => {
  return (
    <TouchableOpacity
      style={{
        height: 80,
        marginTop: 5,
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#202c33',
        borderTopWidth: 1,
        borderBottomWidth: 1,
      }}>
      <Image
        source={require('../../assets/images/profile.jpg')}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          marginLeft: 5,
        }}
      />
      <Text
        style={{
          color: '#fff',
          fontSize: 23,
          // fontWeight: 'bold',
          marginLeft: 10,
          marginBottom: 20,
        }}>
        Fulan bin Fulan
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          flex: 1,
        }}>
        <TouchableOpacity>
          <Icon name="qrcode" size={25} color="#00a884" marginHorizontal={10} />
          ;
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="circle-plus"
            size={25}
            color="#00a884"
            marginHorizontal={10}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({});
