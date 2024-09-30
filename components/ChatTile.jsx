import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChatTile() {
  const navigation = useNavigation();

  function _onPressButton() {
    navigation.navigate("ChatScreen");
    console.log("Pressed tile");
  }

  return (
    <TouchableHighlight onPress={_onPressButton} underlayColor={"white"}>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
          },
        ]}
      >
        <View style={styles.leftColumn}>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png",
            }}
            style={{ width: 70, height: 70 }}
          />
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.title}>Michael Jackson</Text>
          <Text style={styles.subtitle}>hee hee</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
  },
  rightColumn: {
    flex: 4,
    backgroundColor: "grey",
    padding: 10,
    justifyContent: "space-around",
  },
  leftColumn: {
    flex: 1,
    backgroundColor: "darkgrey",
    justifyContent: "center",
    alignItems: "center",
  },
});
