import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const CustomInput = ({
  placeholder,
  style,
  type,
  onChange,
  secure,
  value,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        keyboardType={type}
        style={styles.username}
        placeholder={placeholder}
        placeholderTextColor="black"
        onChangeText={onChange}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 15,
  },
  username: {
    fontSize: 15,
    borderBottomWidth: 1.5,
    borderColor: "#E25F38",
    // padding: 10,
    // marginTop: 40,
    color: "black",
  },
});
