import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ModalPicker } from "../components/ModalPickers";

const ModalAbsenceStatus = () => {
  const [chooseData, setchooseData] = useState("Select Status...");
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  };

  const setData = (option) => {
    setchooseData(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => changeModalVisibility(true)}
        style={styles.tOpacity}
      >
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequiestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    marginVertical: 20,
    fontSize: 25,
  },
  tOpacity: {
    backgroundColor: "orange",
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
});

export default ModalAbsenceStatus;
