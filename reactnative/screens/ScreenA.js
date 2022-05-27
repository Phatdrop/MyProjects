import {
  NavigationContainer,
  useNavigationBuilder,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  DrawerLayoutAndroid,
  Alert,
  Modal,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import ScreenB from "./ScreenB";
import Users from "../components/Api/Users";

export default function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("New Post");
  };

  return (
    <View style={styles.body} >
      <Users />
      <Text style={styles.text}></Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#0f0",
        })}
      >
        <View style={styles.viewContainer}>
        <Text style={styles.body}> Filter By: </Text>
        <Button style = {styles.buttonContainer}
        title = "Onsite" />
        <Button
        title= "Offsite"
        />
        <Button
        title= "Sick"
        />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
  viewContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'purple',
    padding: 10,
    },
  
});
