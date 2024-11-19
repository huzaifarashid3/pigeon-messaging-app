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
import { useNavigation } from "@react-navigation/native";
import pigeon from "../assets/pigeon2.png";
import firestore from "@react-native-firebase/firestore";
import { StatusBar } from "react-native-web";
import { TouchableHighlight } from "react-native";

export default function Login() {
  const navigation = useNavigation();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState([]);

  function onPress() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pigeon</Text>
      <Text style={styles.subheading}>Take's your message anywhere</Text>
      <Image style={styles.image} source={pigeon} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Username"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableHighlight style={styles.loginBtn} onPress={onPress}>
        <Text>LOGIN</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 40,
  },
  subheading: {
    fontSize: 20,
    color: "grey",
    marginBottom: 80,
  },
  image: {
    marginBottom: 50,
  },
  inputView: {
    backgroundColor: "#008080",
    borderRadius: 30,
    alignItems: "center",
    width: "75%",
    height: 45,
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
