import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import ChatTile from "./components/ChatTile";

const chats = [
  {
    title: "michael",
    subTitle: "hee hee",
  },
  {
    title: "huzaifa",
    subTitle: "hehe 2",
  },
];

export default function App() {
  for (let i = 0; i < 20; i++) {
    chats.push(chats[0]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({ items }) => <ChatTile />}
        keyExtractor={(items) => items.title}
      />
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
