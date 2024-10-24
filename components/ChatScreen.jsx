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
  const [text, setText] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [myMessages, setMyMessages] = useState([]);
  const [yourMessages, setYourMessages] = useState([
    {
      message: "you's message",
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
                <Text
                  style={{
                    fontSize: 14,
                    backgroundColor:
                      item.sender == "me" ? "orange" : "powderblue",
                    borderWidth: 2,
                    textAlign: "center",
                    borderColor: "steelblue",
                    borderRadius: 15,
                    padding: 10,
                  }}
                >
                  {item.message}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{ backgroundColor: "red", height: 80, flexDirection: "row" }}
      >
        <TextInput
          style={{ flex: 3 }}
          onChangeText={(newtext) => setText(newtext)}
          defaultValue={text}
          placeholder="Enter message"
        />
        <Button
          style={{ flex: 1, textAlign: "center" }}
          onPress={() => addMessage(text)}
          title="send"
        />
      </View>
    </View>
  );
};

export default ChatScreen;
