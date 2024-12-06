import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';

const FlatListData = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Room')}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Person One</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Person Two</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatListData;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    marginTop: 10,
    borderColor: '#202c33',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5,
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 7,
    marginBottom: 25,
  },
});
