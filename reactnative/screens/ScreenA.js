import {
  NavigationContainer,
  useNavigationBuilder,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  DrawerLayoutAndroid,
  Alert,
  Modal,
  FlatList,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Users from "../components/Api/Users";
import ItemCategory from "../components/ItemCategory";
import SearchInput from "../components/SearchBar";

const commonCategories = [
  {
    name: "OnSite",
    imageUrl: require("../assets/burger.png"),
  },
  {
    name: "OffSite",
    imageUrl: require("../assets/pizza.png"),
  },
  {
    name: "Sick",
    imageUrl: require("../assets/cake.png"),
  },
];

export default function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("New Post");
  };

  const [term, setTerm] = useState("OnSite");
  return (
    <View style={styles.body}>
      <SearchInput />
      <View style={{ marginLeft: 25 }}>
        <FlatList
          data={commonCategories}
          renderItem={({ item, index }) => {
            return (
              <ItemCategory
                name={item.name}
                imageUrl={item.imageUrl}
                index={index}
                active={item.name === term}
                handlePress={() => setTerm(item.name)}
              />
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category) => category.name}
        />
      </View>
      <Users />
      <Text style={styles.text}></Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#0f0",
        })}
      >
        {/* <View style={styles.viewContainer}>
          <Text style={styles.body}> Filter By: </Text>
          <Button style={styles.buttonContainer} title="Onsite" />
          <Button title="Offsite" />
          <Button title="Sick" />
        </View> */}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "blue",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
  viewContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});
