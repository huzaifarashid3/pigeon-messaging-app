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
import firestore from "@react-native-firebase/firestore";

const userId = "1";

const ChatScreen = () => {
  const [text, setText] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [myMessages, setMyMessages] = useState([]);
  const [yourMessages, setYourMessages] = useState([]);
  const [refresh, setRefresh] = useState();
  // useEffect to get data from firebase
  useEffect(() => {
    // get data from firebase
    async function getFirebaseData() {
      // why good
      const myChats = await firestore()
        .collection("chats")
        .where("participants", "array-contains", userId)
        .get();

      myChats.forEach((doc) => {
        doc.ref
          .collection("messages")
          .get()
          .then((messages) => {
            messages.forEach((message) => {
              message = message.data();
              if (message.sender == userId) {
                addMyMessage(message.message);
              } else {
                addYourMessage(message.message);
              }
            });
          });
      });
    }
    getFirebaseData();
  }, [refresh]);

  useEffect(() => {
    const temp = [...myMessages, ...yourMessages];
    temp.sort(function (a, b) {
      return a.time - b.time;
    });
    // console.log(temp);
    setAllMessages(temp);
  }, [myMessages, yourMessages]);

  function addYourMessage(text) {
    setYourMessages((e) => {
      return [
        ...e,
        {
          message: text,
          sender: "you",
          time: new Date(),
        },
      ];
    });
  }

  function addMyMessage(text) {
    console.log(text, "message added");
    setMyMessages((e) => {
      return [
        ...e,
        {
          message: text,
          sender: "me",
          time: new Date(),
        },
      ];
    });
  }

  function postMessage(text) {
    firestore().collection("chats").doc("1").collection("messages").add({
      message: text,
      sender: userId,
    });
    addMyMessage(text);
    setRefresh();
  }
  const [selectedId, setSelectedId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "yellow", flex: 1 }}>
        <FlatList
          style={{ backgroundColor: "blue", flex: 3 }}
          data={allMessages}
          keyExtractor={(item, index) => index}
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
          onPress={() => postMessage(text)}
          title="send"
        />
      </View>
    </View>
  );
};

export default ChatScreen;
