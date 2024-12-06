import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const RoomChat = ({navigation, route}) => {
  const [chat, setChat] = useState('');
  const [chatText, setChatText] = useState([]);
  const [messageWidth, setMessageWidth] = useState(0);

  const handleAddChat = () => {
    if (chat === '') {
      return;
    }

    setChatText([...chatText, {id: Date.now().toString(), title: chat}]);
    setChat('');
  };

  const renderChat = ({item}) => {
    return (
      <View style={styles.chatContainer}>
        <Text
          style={styles.chatText}
          onLayout={event => {
            const width = event.nativeEvent.layout.width;
            if (width > messageWidth) {
              setMessageWidth(width + 20);
            }
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  const handleContentSizeChange = contentWidth => {
    setMessageWidth(contentWidth + 20);
  };

  const {personName} = route.params;

  return (
    <View style={styles.container}>
      {/* STATUSBAR */}
      <StatusBar backgroundColor={'#202c33'} />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButton}>
          <Icon name="chevron-left" size={25} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.imageStyle}
        />
        <Text style={styles.headerText}>{personName}</Text>
      </View>

      {/* FLATLIST*/}
      <FlatList
        data={chatText}
        renderItem={renderChat}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
      />

      {/* TEXTINPUT */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={chat}
          onChangeText={setChat}
          onContentSizeChange={(contentWidth, contentHeight) => {
            handleContentSizeChange(contentWidth);
          }}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleAddChat}>
          <Icon name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RoomChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111b21',
  },
  header: {
    backgroundColor: '#202c33',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
  },
  backButton: {
    marginRight: 10,
  },
  imageStyle: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  flatListContent: {
    paddingTop: 3,
  },
  chatContainer: {
    backgroundColor: '#005c4b',
    marginVertical: 3,
    padding: 10,
    borderRadius: 10,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    width: 'auto',
    maxWidth: '70%',
    marginRight: 10,
  },
  chatText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    backgroundColor: '#202c33',
    alignItems: 'center',
    height: 50,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#2a3942',
    width: '70%',
    borderRadius: 10,
    marginRight: 20,
    color: '#fff',
  },
  sendButton: {
    backgroundColor: '#005c4b',
    width: 38,
    height: 38,
    borderRadius: 50,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
