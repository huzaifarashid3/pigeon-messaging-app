import React, { useEffect, useState } from "react";
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
  const [allMessages, setAllMessages] = useState([]);
  const [myMessages, setMyMessages] = useState([]);
  const [yourMessages, setYourMessages] = useState([
    {
      message: "your message",
      sender: "you",
      time: new Date(),
    },
  ]);

  useEffect(() => {
    const temp = [...myMessages, ...yourMessages];
    temp.sort(function (a, b) {
      return a.time - b.time;
    });
    setAllMessages(temp);
  }, [myMessages, yourMessages]);

  function addMessage(text) {
    setMyMessages([
      ...myMessages,
      {
        message: text,
        sender: "me",
        time: new Date(),
      },
    ]);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "yellow", flex: 1 }}>
        <FlatList
          style={{ backgroundColor: "blue", flex: 3 }}
          data={allMessages}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  alignSelf: item.sender == "me" ? "flex-end" : "flex-start",
                }}
              >
                <Text>{item.time.toUTCString()}</Text>
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
