import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ItemCategory({
  name,
  imageUrl,
  index,
  active,
  handlePress,
}) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          active
            ? { backgroundColor: "rgb(241,186,87" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 500,
    marginVertical: 15,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
    marginBottom: 7,
  },
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 500,
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
  },
});
