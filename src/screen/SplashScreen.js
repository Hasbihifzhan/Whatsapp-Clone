import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

const SpalshScreen = ({navigation}) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);

    return () => clearTimeout(interval);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#111b21',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={'#111b21'} barStyle={'light-content'} />
      <Image
        source={require('../../assets/images/LogoWa.png')}
        style={{height: 100, width: 100}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff'}}>From</Text>
        <Image
          source={require('../../assets/images/LogoMeta.png')}
          style={{height: 50, width: 100}}
        />
      </View>
    </View>
  );
};

export default SpalshScreen;

const styles = StyleSheet.create({});
