import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatTile from "./components/ChatTile";
import ChatScreen from "./components/ChatScreen";

const chats = Array.from({ length: 20 }, () => ({
  title: "michael",
  subTitle: "hee hee",
}));

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navChild}>Chats</Text>
        <Text style={styles.navChild}>Filter</Text>
      </View>
      <View>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
          data={chats}
          renderItem={({ item }) => <ChatTile />}
        />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ title: "chat screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: "rgba(40,40,50,1)",
  },
  navChild: {
    fontSize: 34,
    color: "white",
  },
  navbar: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
});
