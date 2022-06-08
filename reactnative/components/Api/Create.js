import React from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import AppCheckBox from "../MyCheckBox";
import axios from "axios";

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      currentAbsenceStatus: "",
    },
  });

  const obj = {
    firstName: "mike",
    lastName: "andersen",
  };
  const URL = "http://206.189.49.197/User/";

  // axios
  //   .post(URL, obj)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  const onSubmit = (data) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First Name"
            style={styles.TextBox}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Last Name"
            style={styles.TextBox}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Absence Status"
            style={styles.TextBox}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="Absence Status"
      />
      <AppCheckBox />
      {errors.currentAbsenceStatus && <Text>This is required.</Text>}
      <Button
        style={styles.button}
        title="Submit"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TextBox: {
    borderWidth: 1,
    borderBottomColor: "black",
    margin: 10,
    padding: 5,
  },
  input: {
    borderWidth: 2,
    borderBottomColor: "black",
    margin: 10,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "orange",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
