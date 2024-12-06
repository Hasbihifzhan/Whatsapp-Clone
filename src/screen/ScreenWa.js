import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  
} from 'react-native';
import * as React from 'react';
import HeaderCustom from '../components/HeaderCustom';
import SearchBar from '../components/SearchBar';
import Bar from '../components/Bar';
// import FlatListData from '../components/FlatListData';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useState} from 'react';

const data = [
  {
    id: '1',
    name: 'Person One',
    image: require('../../assets/images/profile.jpg'),
  },
  {
    id: '2',
    name: 'Person Two',
    image: require('../../assets/images/profile.jpg'),
  },
];

const screen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleNavigateToSetting = () => {
    setModalVisible(false);
    navigation.navigate('Setting');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Room', {personName: item.name})}
        style={{
          flexDirection: 'row',
          height: 60,
          marginTop: 10,
          borderColor: '#202c33',
          alignItems: 'center',
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}>
        <Image
          source={item.image}
          style={{width: 50, height: 50, borderRadius: 25, marginLeft: 5}}
        />
        <Text
          style={{
            color: '#ffffff',
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 7,
            marginBottom: 25,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#111b21'}}>
      {/* STATUSBAR */}
      <StatusBar backgroundColor={'#111b21'} barStyle={'light-content'} />

      {/* HEADER */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 15,
        }}>
        <HeaderCustom headerColor="#111b21" />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon
            name="ellipsis-vertical"
            size={25}
            color="#fff"
            style={{marginRight: 5}}
          />
        </TouchableOpacity>
      </View>

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="fade"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View>
            <TouchableOpacity style={styles.styleTouchModal}>
              <Text style={styles.textModalStyle}>Grup baru</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.styleTouchModal}>
              <Text style={styles.textModalStyle}>Siaran baru</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.styleTouchModal}>
              <Text style={styles.textModalStyle}>Perangkat tertaut</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.styleTouchModal}>
              <Text style={styles.textModalStyle}>Pesan berbintang</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.styleTouchModal}
              onPress={handleNavigateToSetting}>
              <Text style={styles.textModalStyle}>Setelan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* SEARCHBAR */}
      <SearchBar />

      {/* BAR */}
      <Bar />

      {/* FLATLIST */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default screen;

const styles = StyleSheet.create({
  modalContainer: {
    height: 200,
    width: '40%',
    backgroundColor: '#111b21',
    marginTop: 50,
    alignSelf: 'flex-end',
  },
  styleTouchModal: {
    height: 40,
    justifyContent: 'center',
  },
  textModalStyle: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
});
