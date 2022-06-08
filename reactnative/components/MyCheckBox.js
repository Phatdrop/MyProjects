import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function AppCheckBox({
  checked,
  onChange,
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
}) {
  function onCheckmarkPress() {
    onChange(!checked);
  }

  const iconProps = checked ? activeIconProps : inactiveIconProps;
  return (
    <Pressable
      style={[buttonStyle, checked ? activeButtonStyle : inactiveButtonStyle]}
      onPress={onCheckmarkPress}
    >
      {checked && (
        <Ionicons name="checkmark" size={24} color="white" {...iconProps} />
      )}
    </Pressable>
  );
}

function MyCheckBox() {
  const [checked, onChange] = useState(false);

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>Current AbsenceStatus</Text>

      <View style={styles.checkboxContainer}>
        <AppCheckBox
          checked={checked}
          onChange={onChange}
          buttonStyle={styles.checkboxBase}
          activeButtonStyle={styles.checkboxChecked}
        />
        <Text style={styles.checkboxLabel}>{`⬅️ OnSite`}</Text>
        <AppCheckBox
          checked={checked}
          onChange={onChange}
          buttonStyle={styles.checkboxBase}
          activeButtonStyle={styles.checkboxChecked}
        />
        <Text style={styles.checkboxLabel}>{`⬅️ OffSite`}</Text>
        <AppCheckBox
          checked={checked}
          onChange={onChange}
          buttonStyle={styles.checkboxBase}
          activeButtonStyle={styles.checkboxChecked}
        />
        <Text style={styles.checkboxLabel}>{`⬅️ Sick`}</Text>
      </View>
    </View>
  );
}

export default MyCheckBox;

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "coral",
    backgroundColor: "transparent",
  },

  checkboxChecked: {
    backgroundColor: "coral",
  },

  appContainer: {
    alignItems: "center",
  },

  appTitle: {
    marginVertical: 16,
    fontSize: 24,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxLabel: {
    marginLeft: 8,
    fontSize: 18,
  },
});
