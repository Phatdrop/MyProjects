import { Text, View, StyleSheet, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import IconButton from "../components/IconButton";
import NoteInputModal from "../components/NoteInputModal";

const NoteScreen = ({ user }) => {
  const [greet, setGreet] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs == 0 || hrs < 12) {
      setGreet("good morning");
    } else if (hrs >= 12 && hrs < 18) {
      setGreet("good afternoon");
    } else {
      setGreet("good evening");
    }
  };
  useEffect(() => {
    findGreet();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <View style={styles.container}>
        <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
        <SearchBar containerStyle={{ marginVertical: 15 }} />
        <View
          style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}
        >
          <Text style={styles.emptyHeader}> Add notes </Text>
          <IconButton
            onPress={() => setModalVisible(true)}
            antIconName="plus"
            style={styles.addBtn}
          />
        </View>
      </View>
      {/* <NoteInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.2,
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  addBtn: {
    position: "absolute",
    right: 15,
    bottom: 50,
  },
});

export default NoteScreen;
