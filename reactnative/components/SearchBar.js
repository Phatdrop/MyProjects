import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const SearchBar = ({ containerStyle }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Here.."
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
  },
  container: {},
});

export default SearchBar;

//RNFE og RNSS
