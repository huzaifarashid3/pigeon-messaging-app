import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import ChatTile from "./components/ChatTile";
import TouchableChatTile from "./components/touchableChatTile";

const chats = Array.from({ length: 20 }, () => ({
  title: "michael",
  subTitle: "hee hee",
}));

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chats</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
        data={chats}
        renderItem={({ item }) => <TouchableChatTile />}
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
  heading: {
    fontSize: 34,
    color: "white",
    alignSelf: "flex-start",
    margin: 10,
  },
});
