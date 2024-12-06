import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const SearchBar = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <View
        style={{
          width: '95%',
          backgroundColor: '#202c33',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <View style={{marginLeft: 3}}>
          <TextInput
            placeholder="Cari"
            placeholderTextColor={'#8696a0'}
            color={'#fff'}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
