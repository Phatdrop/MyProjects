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
  TouchableOpacity,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Create from "../components/Api/Create";
import CustomButton from "../components/CustomButton";
import ModalAbsenceStatus from "../components/ModalAbsenceStatus";

export default function ScreenB({ navigation }) {
  const onPressHandler = () => {
    //navigation.navigate("Screen_A");
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <CustomButton
        title="open camera"
        color="#0080ff"
        onPressFunction={() => {
          navigation.navigate("Camera");
        }}
      />
      <Create />
      <ModalAbsenceStatus />
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#0f0",
        })}
      ></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 20,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 0,
    padding: 5,
  },
});
