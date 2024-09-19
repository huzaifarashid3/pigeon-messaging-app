import { StyleSheet, Text, View, Image } from "react-native";
import ChatTile from "./components/ChatTile";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatTile />
      <ChatTile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    padding: 4,
    backgroundColor: "rgba(40,40,50,1)",
  },
});
