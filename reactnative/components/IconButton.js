import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";

// const [onSite, setOnSite] = useState("");
//const [offSite, setOffSite] = useState("");
// const [sick, setSick] = useState("");

//function handleOffSiteChange() {}

// const handleOnSiteChange = (event) => {
//   setOnSite(event.target.value);
// };

// const handleSickChange = (event) => {
//   setSick(event.target.value);
// };

const IconButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainer}>
          <Button title="OnSite" style={styles.buttonInput} />
        </View>
        <Button title="OffSite" style={styles.buttonInput} />
      </View>
      <Button title="Sick" style={styles.buttonInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "yellow",
    borderRadius: 20,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 0,
    padding: 5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  buttonInput: {
    backgroundColor: "red",
    borderRadius: 20,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 0,
    padding: 5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default IconButton;
