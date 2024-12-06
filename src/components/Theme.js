import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState, useEffect} from 'react';

const Theme = () => {
  const [lampu, setLampu] = useState(false);

  const backGroundColor = lampu ? '#ffffff' : '#111b21';
  const textColor = lampu ? 'black' : 'white';
  return (
    <View>
      <Switch value={lampu} onValueChange={() => setLampu(!lampu)} />
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({});
