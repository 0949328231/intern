import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FormField from "./app/screen/4-register-form/FormField";
import RegisterForm from "./app/screen/4-register-form/RegisterForm";
import HomeScreen from "./app/screen/HomeScreen";
import Instagram from "./app/screen/instagram/InstagramFeed";
import RockPaperScissors from "./app/screen/KeoBuaBao/RockPaperScissors";
import ToDoList from "./app/screen/ToDoList/ToDoList";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="Instagram" component={Instagram} />
        <Stack.Screen name="RockPaperScissors" component={RockPaperScissors} />
        <Stack.Screen name="RegisterForm" component={RegisterForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
