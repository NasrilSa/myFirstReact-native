import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Logika pengiriman pesan
    Alert.alert('Pesan terkirim:', message);
    setMessage('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inbox}>
        <Text style={styles.textInbox}>Halo gimana kabarmu Bro?👋</Text>
      </View>
      <View style={styles.outbox}>
        <Text style={styles.textOutbox}>
          baik broo,Alhamduliillah gw baru keterima kerja..
        </Text>
      </View>
      <View style={styles.outbox}>
        <Text style={styles.textOutbox}>Kalo lu gimana??</Text>
      </View>
      <View style={styles.inbox}>
        <Text style={styles.textInbox}>
          Yahh gitulahh, hidup ku gini-gini aja,nulis kodingan ntar error
          ,nangis,banting keyboard,ketiduran,bangun lagi,ngulang lagii...😓
        </Text>
      </View>
      <View style={styles.inbox}>
        <Text style={styles.textInbox}>
          Doain ya Bro semoga tahun depan bisa lolos SNBP UI Negeri 😁
        </Text>
      </View>
      <View style={styles.outbox}>
        <Text style={styles.textOutbox}>Yaa aminn..🤲</Text>
      </View>
      <View style={styles.outbox}>
        <Text style={styles.textOutbox}>Semangat terus broo🚀</Text>
      </View>
      <View style={styles.outbox}>
        <Text style={styles.textOutbox}>
          Suatu saat nanti pasti lu juga bakal berhasil kook..
        </Text>
      </View>
      <View style={styles.inbox}>
        <Text style={styles.textInbox}>Aamiin🫶</Text>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Message"
        placeholderTextColor="#758694"
        value={message}
        onChangeText={setMessage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#17153B',
    width: '100%',
    height: '100%',
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    gap: 15,
    fontFamily: 'RobotoMono',
  },
  inbox: {
    backgroundColor: '#7C00FE',
    maxWidth: '70%', 
    flexShrink: 1,
    padding: 10,
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  textInbox: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'semibold',
    fontFamily: 'RobotoMono',
  },
  outbox: {
    alignSelf: 'flex-start',
    maxWidth: '70%',
    flexShrink: 1,
    padding: 10,
    backgroundColor: '#2E236C',
    borderRadius: 10,
  },
  textOutbox: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'semibold',
    fontFamily: 'RobotoMono',
  },
  textInput: {
    width: '100%',
    height: '11%',
    backgroundColor: '#2E236C',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    color: '#758694',
    paddingLeft: 20,
    fontFamily: 'RobotoMono',
  },
  // button: {
  //   backgroundColor: '#7C00FE',
  //   padding: 10,
  //   borderRadius: 10,
  //   alignItems: 'center',
  // },
  // buttonText: {
  //   color: 'white',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   fontFamily: 'RobotoMono',
  // },
});

export default App;
