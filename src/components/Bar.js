import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Bar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={[styles.bar, {width: 70}]}>
        <Text style={styles.textBar}>Semua</Text>
      </View>
      <View style={[styles.bar, {width: 110}]}>
        <Text style={styles.textBar}>Belum dibaca</Text>
      </View>
      <View style={[styles.bar, {width: 70}]}>
        <Text style={styles.textBar}>Favorit</Text>
      </View>
      <View style={[styles.bar, {width: 60}]}>
        <Text style={styles.textBar}>Grup</Text>
      </View>
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({
  bar: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202c33',
    borderRadius: 20,
    marginTop: 10,
    margin: 5,
  },
  textBar: {
    color: '#8696a0',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
