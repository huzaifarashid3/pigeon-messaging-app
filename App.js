import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import ChatTile from "./components/ChatTile";

const chats = Array.from({ length: 20 }, () => ({
  title: "michael",
  subTitle: "hee hee",
}));

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Chats</Text>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatTile />}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: "rgba(40,40,50,1)",
  },
});
