import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const FlatListSetting = () => {
  return (
    <View>
      {/* Kontainer pertama */}
      <TouchableOpacity style={styles.containerPertama}>
        {/* Kotak kiri (ikon key) */}
        <View style={styles.iconPertama}>
          <Icon name="key" size={25} marginHorizontal={10} color={'#fff'} />
        </View>

        {/* Kontainer kanan (kotak informasi) */}
        <View style={styles.kotakInformasi}>
          {/* Konten pertama */}
          <View style={styles.kontenPertama}>
            <Text style={styles.textStyle}>Account</Text>
          </View>
          <View style={styles.subKontent}>
            <Text style={styles.subTextStyle}>
              Security notifications, change number
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Kontainer kedua */}
      <TouchableOpacity style={styles.allKonten}>
        <View style={styles.containerPertama}>
          {/* Kotak kiri (ikon key) */}
          <View style={styles.iconContainer}>
            <Icon
              name="unlock-keyhole"
              size={25}
              marginHorizontal={10}
              color={'#fff'}
            />
          </View>

          {/* Kontainer kanan (kotak informasi) */}
          <View style={{flexDirection: 'column', width: '87%'}}>
            {/* Konten kedua */}
            <View style={styles.kontenKedua}>
              <Text style={styles.textStyle}>Privacy</Text>
            </View>
            <View style={styles.subKontent}>
              <Text style={styles.subTextStyle}>
                Block contact, disappearing messages
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Kontainer ketiga */}
      <TouchableOpacity style={styles.allKonten}>
        <View style={styles.containerPertama}>
          {/* Kotak kiri (ikon key) */}
          <View style={styles.iconContainer}>
            <Icon
              name="user-tie"
              size={25}
              marginHorizontal={10}
              color={'#fff'}
            />
          </View>

          {/* Kontainer kanan (kotak informasi) */}
          <View style={{flexDirection: 'column', width: '87%'}}>
            {/* Konten kedua */}
            <View style={styles.kontenKedua}>
              <Text style={styles.textStyle}>Avatar</Text>
            </View>
            <View style={styles.subKontent}>
              <Text style={styles.subTextStyle}>Create,edit,profile photo</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Kontainer keempat */}
      <TouchableOpacity style={styles.allKonten}>
        <View style={styles.containerPertama}>
          {/* Kotak kiri (ikon key) */}
          <View style={styles.iconContainer}>
            <Icon
              name="rectangle-list"
              size={25}
              marginHorizontal={10}
              color={'#fff'}
            />
          </View>

          {/* Kontainer kanan (kotak informasi) */}
          <View style={{flexDirection: 'column', width: '87%'}}>
            {/* Konten kedua */}
            <View style={styles.kontenKedua}>
              <Text style={styles.textStyle}>Lists</Text>
            </View>
            <View style={styles.subKontent}>
              <Text style={styles.subTextStyle}>Manage peaple and group</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Kontainer kelima */}
      <TouchableOpacity style={styles.allKonten}>
        <View style={styles.containerPertama}>
          {/* Kotak kiri (ikon key) */}
          <View style={styles.iconContainer}>
            <Icon
              name="message"
              size={25}
              marginHorizontal={10}
              color={'#fff'}
            />
          </View>

          {/* Kontainer kanan (kotak informasi) */}
          <View style={{flexDirection: 'column', width: '87%'}}>
            {/* Konten kedua */}
            <View style={styles.kontenKedua}>
              <Text style={styles.textStyle}>Chats</Text>
            </View>
            <View style={styles.subKontent}>
              <Text style={styles.subTextStyle}>
                Theme,walpapers,chat history
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Kontainer keenam */}
      <TouchableOpacity style={styles.allKonten}>
        <View style={styles.containerPertama}>
          {/* Kotak kiri (ikon key) */}
          <View style={styles.iconContainer}>
            <Icon name="bell" size={25} marginHorizontal={10} color={'#fff'} />
          </View>

          {/* Kontainer kanan (kotak informasi) */}
          <View style={{flexDirection: 'column', width: '87%'}}>
            {/* Konten kedua */}
            <View style={styles.kontenKedua}>
              <Text style={styles.textStyle}>Notifications</Text>
            </View>
            <View style={styles.subKontent}>
              <Text style={styles.subTextStyle}>
                Message,group & call tones
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Kontainer ketujuh */}
      <TouchableOpacity style={styles.allKonten}>
        <View style={styles.containerPertama}>
          {/* Kotak kiri (ikon key) */}
          <View style={styles.iconContainer}>
            <Icon
              name="circle-notch"
              size={25}
              marginHorizontal={10}
              color={'#fff'}
            />
          </View>

          {/* Kontainer kanan (kotak informasi) */}
          <View style={{flexDirection: 'column', width: '87%'}}>
            {/* Konten kedua */}
            <View style={styles.kontenKedua}>
              <Text style={styles.textStyle}>Storage anda data</Text>
            </View>
            <View style={styles.subKontent}>
              <Text style={styles.subTextStyle}>
                Network usage,auto-download
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FlatListSetting;

const styles = StyleSheet.create({
  containerPertama: {
    flexDirection: 'row',
  },
  iconPertama: {
    width: 60,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
  },
  kotakInformasi: {
    flexDirection: 'column',
    width: '87%',
  },
  kontenPertama: {
    height: 42,
    marginTop: 10,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
  subKontent: {
    height: 42,
    marginTop: 1,
    // backgroundColor: 'green',
  },
  subTextStyle: {
    color: '#fff',
    fontSize: 14,
  },
  iconContainer: {
    width: 60,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  kontenKedua: {
    height: 42,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  allKonten: {
    marginTop: 10,
  },
});
