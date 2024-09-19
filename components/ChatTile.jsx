import { View, Text, Image, StyleSheet } from 'react-native';

export default function ChatTile()  {
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
          <Text style={styleChat.title}>Michael Jackson this awesome </Text>
          <Text>hee hee</Text>
         </View>
    </View>
  )
};

const styleChat = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 2,
    width: '100%',
    height: 120
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  rightColumn: {
    flex: 4,
    backgroundColor: 'grey', 
    padding: 10,
    justifyContent: 'space-around',
  },
  leftColumn: {
      flex: 1,
      backgroundColor: 'darkgrey',
      justifyContent: 'center', 
      alignItems: 'center'
    }
});