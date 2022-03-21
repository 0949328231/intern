import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, dimension } from "../constants/theme";
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.ButtonNext}
        onPress={() => navigation.navigate("ToDoList")}
      >
        <Text>To Do List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ButtonNext}
        onPress={() => navigation.navigate("Instagram")}
      >
        <Text>Clone instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonNext}
        onPress={() => navigation.navigate("RockPaperScissors")}
        >
        <Text>Game kéo búa bao</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ButtonNext}
        onPress={() => navigation.navigate("RegisterForm")}
        >
        <Text>Làm Form đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonNext}
        onPress={() => navigation.navigate("CallApi")}
        >
        <Text>Call API</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: dimension.height * 0.1,
  },
  ButtonNext: {
    width: dimension.width * 0.7,
    height: dimension.height * 0.1,
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
