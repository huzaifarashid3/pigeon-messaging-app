import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";

const ChatScreen = () => {
  const [text, setText] = useState("Useless Text");

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "yellow", flex: 1 }}></View>
      <View style={{ backgroundColor: "red", height: 80 }}>
        <TextInput
          onChangeText={(newtext) => setText(newtext)}
          defaultValue={text}
        />
      </View>
    </View>
  );
};

export default ChatScreen;
