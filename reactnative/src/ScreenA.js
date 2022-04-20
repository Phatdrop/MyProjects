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

export default function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("New Post");
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#0f0",
        })}
      >
        <Text style={styles.text}> Go to screen B </Text>
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
});
