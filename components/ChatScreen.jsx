import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  Button,
} from "react-native";

const ChatScreen = () => {
  const [text, setText] = useState("Useless Text");
  const [myMessages, setMyMessages] = useState([]);
  const [yourMessages, setYourMessages] = useState([
    { message: "your message", sender: "you" },
  ]);

  function addMessage(text) {
    setMyMessages([...myMessages, { message: text, sender: "me" }]);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "yellow", flex: 1 }}>
        <FlatList
          style={{ backgroundColor: "blue", flex: 3 }}
          data={[...myMessages, ...yourMessages]}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  alignSelf: item.sender == "me" ? "flex-end" : "flex-start",
                }}
              >
                <Text>{item.message}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{ backgroundColor: "red", height: 80 }}>
        <TextInput
          onChangeText={(newtext) => setText(newtext)}
          defaultValue={text}
        />
        <Button onPress={() => addMessage(text)} title="send" />
      </View>
    </View>
  );
};

export default ChatScreen;
