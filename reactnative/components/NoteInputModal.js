import {
  Text,
  View,
  StyleSheet,
  Modal,
  StatusBar,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import IconButton from "./IconButton";

const NoteInputModal = ({ visible, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === "title") {
      setTitle(text);
      if (valueFor === "description") {
        setDescription(text);
      }

      const handleSubmit = () => {
        if (!title.trim() && desc.trim()) return onclose();
      };

      return (
        <>
          <StatusBar hidden />
          <Modal visible={visible} animationType="fade">
            <View style={styles.container}>
              <TextInput
                value={title}
                onChangeText={(text) => handleOnChangeText(text, "title")}
                placeholder="Title"
                style={[styles.input, styles.title]}
              />
              <TextInput
                value={description}
                multiline
                placeholder="Note"
                style={[styles.input, styles.description]}
                onChangeText={(text) => handleOnChangeText(text, "description")}
              />
              <View style={styles.btnContainer}>
                <IconButton
                  size={15}
                  antIconName="check"
                  onPress={handleSubmit}
                />
                <IconButton
                  size={15}
                  style={{ marginLeft: 15 }}
                  antIconName="close"
                />
              </View>
            </View>
            <TouchableWithoutFeedback onPress={handleModalClose}>
              <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
            </TouchableWithoutFeedback>
          </Modal>
        </>
      );
    }
    const styles = StyleSheet.create({
      input: {
        borderBottomWidth: 2,
        borderBottomColor: "cyan",
        fontSize: 20,
        paddingTop: 15,
        color: "black",
      },
      container: {
        paddingHorizontal: 20,
      },
      title: {
        height: 40,
        marginBottom: 15,
        fontWeight: "bold",
      },
      description: {
        height: 100,
      },
      modalBG: {
        flex: 1,
        zIndex: -1,
      },
      btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 15,
      },
    });
  };
};
export default NoteInputModal;
