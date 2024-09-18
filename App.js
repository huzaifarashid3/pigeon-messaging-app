import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const ChatTile = () => {
  return (
    <View
      style={[
        styleChat.container,
        {
          flexDirection: 'row',
        },
      ]}>
         <View style={styleChat.leftColumn}>
         <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 70, height: 70}}
        />
         </View>
         <View style={styleChat.rightColumn}>
          <Text style={styleChat.title}>Hello, how are you?</Text>
          <Text>Hello, how are you 2?</Text>
         </View>
    </View>
  )
};

const styleChat = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    width: '100%',
    height: 120
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  rightColumn: {
    flex: 4,
    backgroundColor: 'red', 
    padding: 10,
    justifyContent: 'space-around',
    borderBottomWidth: 0.5
  },
  leftColumn: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'center', 
      alignItems: 'center'
    }
});

export default function App() {
  return (
    <View style={styles.container}>
      
      <ChatTile />
      <ChatTile />
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
  },
});
